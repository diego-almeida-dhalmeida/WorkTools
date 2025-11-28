import os, sys, math, argparse, pathlib, re
from datetime import datetime, timedelta, timezone
from urllib.parse import quote
import requests
import html2text
from slugify import slugify

# ---------- Config ----------
DEFAULT_FIELDS = [
    "System.Id",
    "System.Title",
    "System.WorkItemType",
    "System.State",
    "System.AreaPath",
    "System.IterationPath",
    "System.AssignedTo",
    "System.CreatedDate",
    "System.ChangedDate",
    "System.Description",
    "Microsoft.VSTS.Common.AcceptanceCriteria",
]
BATCH_SIZE = 180
DEFAULT_TYPES = ["Epic","Feature","Bug Fix","User Story","Tech Story","Improvement"]

H2T = html2text.HTML2Text()
H2T.ignore_links = False
H2T.body_width = 0

def to_md(html_text: str) -> str:
    if not html_text:
        return ""
    try:
        return H2T.handle(html_text)
    except Exception:
        return re.sub("<[^<]+?>", "", html_text or "")

def frontmatter(data: dict) -> str:
    def _quote_scalar(val) -> str:
        s = str(val if val is not None else "").replace('"', r'\"').replace(": ", " - ")
        return f'"{s}"'
    lines = ["---"]
    for k, v in data.items():
        if isinstance(v, (list, tuple)):
            parts = []
            for x in v:
                parts.append(_quote_scalar(x))
            lines.append(f"{k}: [{', '.join(parts)}]")
        else:
            lines.append(f"{k}: {_quote_scalar(v)}")
    lines.append("---")
    return "\n".join(lines)

def parse_relations(item: dict):
    parents, children, hyperlinks, attachments = [], [], [], []
    for rel in item.get("relations") or []:
        reltype = rel.get("rel")
        url = rel.get("url") or ""
        attrs = rel.get("attributes") or {}
        m = re.search(r"/workItems/(\d+)$", url)
        wid = m.group(1) if m else None
        if reltype == "System.LinkTypes.Hierarchy-Reverse" and wid:
            parents.append(wid)
        elif reltype == "System.LinkTypes.Hierarchy-Forward" and wid:
            children.append(wid)
        elif reltype == "Hyperlink":
            hyperlinks.append((url, attrs.get("name") or "link"))
        elif reltype == "AttachedFile":
            name = attrs.get("name") or "anexo"
            attachments.append((name, url))
    return parents, children, hyperlinks, attachments

def md_filename(wid: int, title: str) -> str:
    return f"{wid} - {slugify(title or 'sem-titulo')[:80]}.md"

def ado_item_url(org_url: str, project: str, wid: int) -> str:
    # Link direto para edição no ADO
    return f"{org_url}/{quote(project, safe='')}/_workitems/edit/{wid}"

def is_image_name(name: str) -> bool:
    return bool(re.search(r"\.(png|jpe?g|gif|bmp|svg)$", (name or "").lower()))

def item_to_markdown(wi: dict, out_dir: pathlib.Path, org_url: str, project: str):
    f = wi.get("fields", {})
    wid = wi["id"]
    title = f.get("System.Title") or ""
    wtype = f.get("System.WorkItemType") or "WorkItem"
    state = f.get("System.State") or ""
    area = f.get("System.AreaPath") or ""
    iteration = f.get("System.IterationPath") or ""
    assigned = (f.get("System.AssignedTo") or {}).get("displayName") if isinstance(f.get("System.AssignedTo"), dict) else f.get("System.AssignedTo")
    created = f.get("System.CreatedDate") or ""
    changed = f.get("System.ChangedDate") or ""

    desc_md = to_md(f.get("System.Description"))
    ac_md = to_md(f.get("Microsoft.VSTS.Common.AcceptanceCriteria"))

    parents, children, web_links, attachments = parse_relations(wi)
    parent_links = " ".join([f"[[{p} - ]]" for p in parents])
    child_links = " ".join([f"[[{c} - ]]" for c in children])

    fm = {
        "id": f"WI-{wid}",
        "title": title,
        "type": wtype,
        "state": state,
        "area": area,
        "iteration": iteration,
        "assignedTo": assigned or "",
        "created": created,
        "changed": changed,
    }

    ado_link = ado_item_url(org_url, project, wid)

    body = []
    body.append(f"# WI-{wid} - {title}\n")
    body.append(f"**Link ADO:** [{ado_link}]({ado_link})\n")
    if parent_links:
        body.append(f"**Pai:** {parent_links}\n")
    if child_links:
        body.append(f"**Filhos:** {child_links}\n")

    body.append("## 1. Identificação\n")
    body.append(f"- **ID/Ref:** WI-{wid}\n- **Tipo:** {wtype}\n- **Status:** {state}\n")

    body.append("\n## 2. Contexto\n- **Objetivo do Caso de Uso:** \n- **Descrição Resumida:** \n")
    body.append("\n## 3. Fluxo Principal\n1. \n2. \n3. \n")
    body.append("\n## 4. Fluxos Alternativos\n- \n")
    body.append("\n## 5. Fluxos de Exceção\n- \n")
    body.append("\n## 6. Regras de Negócio\n- \n")
    body.append("\n## 7. Requisitos Não Funcionais\n- \n")

    body.append("\n## 8. Métricas e Critérios de Aceite\n")
    body.append(ac_md.strip() + "\n" if ac_md.strip() else "- \n")

    body.append("\n## 9. Descrição (Abaixo vem do Azure DevOps)\n")
    body.append((desc_md.strip() or "_Sem descrição no ADO._") + "\n")

    if web_links:
        body.append("\n## 10. Referências/Links (ADO)\n")
        body.extend([f"- [{name}]({url})" for url, name in web_links])
        body.append("\n")

    if attachments:
        body.append("\n## 11. Anexos (arquivos/imagens)\n")
        for name, url in attachments:
            # link sempre; se for imagem, também embeda
            body.append(f"- [{name}]({url})")
            if is_image_name(name):
                body.append(f"\n  \n![]({url})\n")
        body.append("\n")

    content = frontmatter(fm) + "\n" + "\n".join(body)

    folder = out_dir / wtype.replace(" ", "_")
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / md_filename(wid, title)
    path.write_text(content, encoding="utf-8")
    return path

def build_index(items, out_dir: pathlib.Path):
    lines = ["# INDEX - Azure DevOps\n"]
    by_type = {}
    for wi in items:
        t = wi.get("fields", {}).get("System.WorkItemType", "WorkItem")
        by_type.setdefault(t, []).append(wi)
    for t, arr in sorted(by_type.items()):
        lines.append(f"\n## {t}\n")
        for wi in sorted(arr, key=lambda x: int(x["id"])):
            title = wi.get("fields", {}).get("System.Title", "")
            lines.append(f"- [[{wi['id']} - {slugify(title)[:80]}|WI-{wi['id']} - {title}]]")
    (out_dir / "INDEX.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

def post_wiql(session: requests.Session, org_url: str, project: str, team: str | None, wiql: str):
    base = f"{org_url}/{quote(project, safe='')}"
    if team:
        base += f"/{quote(team, safe='')}"
    url = f"{base}/_apis/wit/wiql?api-version=7.0"
    resp = session.post(url, json={"query": wiql})
    if not resp.ok:
        try:
            print("Erro WIQL:", resp.status_code, resp.json())
        except Exception:
            print("Erro WIQL:", resp.status_code, resp.text)
        resp.raise_for_status()
    return resp.json()

def build_board_like_where(area_under: str | None, types: list[str], state_not: str = "Removed") -> str:
    parts = ["[System.TeamProject] = @project"]
    if area_under:
        parts.append(f"[System.AreaPath] UNDER '{area_under}'")
    if types:
        types_str = ", ".join(f"'{t}'" for t in types)
        parts.append(f"[System.WorkItemType] IN ({types_str})")
    if state_not:
        parts.append(f"[System.State] <> '{state_not}'")
    return " AND ".join(parts)

def fetch_ids_windowed(session: requests.Session, org_url: str, project: str, team: str | None, where_clause: str):
    # Varrer do presente até 2000-01-01 em janelas adaptativas (somente DATA)
    end = datetime.now(timezone.utc).date()
    floor = datetime(2000, 1, 1, tzinfo=timezone.utc).date()
    window_days = 180
    ids = []

    while end > floor:
        start = max(floor, end - timedelta(days=window_days))
        wiql = f"""
        SELECT [System.Id]
        FROM WorkItems
        WHERE {where_clause}
          AND [System.ChangedDate] >= '{start:%Y-%m-%d}'
          AND [System.ChangedDate] <  '{end:%Y-%m-%d}'
        ORDER BY [System.ChangedDate] DESC
        """.strip()
        try:
            data = post_wiql(session, org_url, project, team, wiql)
            batch_ids = [x["id"] for x in data.get("workItems", [])]
            print(f"Janela {start:%Y-%m-%d} -> {end:%Y-%m-%d}: {len(batch_ids)} ids")
            ids.extend(batch_ids)
            end = start  # vai para a janela anterior
            if len(batch_ids) < 15000 and window_days < 365:
                window_days = min(365, int(window_days * 1.5))
        except requests.HTTPError as e:
            # Se exceder 20k, reduz a janela de dias até o mínimo de 1 dia
            msg = ""
            try:
                msg = e.response.json().get("message", "")
            except Exception:
                msg = e.response.text
            if "VS402337" in msg or "exceeds the size limit" in msg:
                if window_days > 1:
                    window_days = max(1, window_days // 2)
                    print(f"Estourou 20k. Reduzindo janela para {window_days} dia(s).")
                    continue
                else:
                    print("Mesmo 1 dia excede 20k nesta org. Interrompendo para evitar loop.")
                    break
            else:
                raise

    # dedup preservando ordem
    seen = set(); unique_ids = []
    for i in ids:
        if i not in seen:
            unique_ids.append(i); seen.add(i)
    return unique_ids

def fetch_items_batch(session: requests.Session, org_url: str, ids, fields):
    url = f"{org_url}/_apis/wit/workitemsbatch?api-version=7.0"
    items = []
    for i in range(0, len(ids), BATCH_SIZE):
        batch = ids[i:i+BATCH_SIZE]
        body = {"ids": batch, "fields": fields, "expand": "Relations"}
        resp = session.post(url, json=body)
        if not resp.ok:
            try:
                print("Erro batch:", resp.status_code, resp.json())
            except Exception:
                print("Erro batch:", resp.status_code, resp.text)
            resp.raise_for_status()
        items.extend(resp.json().get("value", []))
        print(f"- Detalhe lote {i//BATCH_SIZE + 1}/{math.ceil(len(ids)/BATCH_SIZE)} ok")
    return items

def main():
    ap = argparse.ArgumentParser(description="Exporta Work Items (filtro estilo board) do Azure DevOps para Markdown (Obsidian), com links e anexos.")
    ap.add_argument("--org-url", default=os.getenv("ADO_ORG_URL"), help="https://dev.azure.com/<org>")
    ap.add_argument("--project", default=os.getenv("ADO_PROJECT"), help="Nome do projeto")
    ap.add_argument("--team", default=os.getenv("ADO_TEAM"), help="Nome do time (opcional)")
    ap.add_argument("--area", default=os.getenv("ADO_AREA"), help=r"Area Path base. Ex: Atila 2.0\COE RELACIONAMENTO")
    ap.add_argument("--types", default=os.getenv("ADO_TYPES") or ",".join(DEFAULT_TYPES), help="Tipos separados por vírgula")
    ap.add_argument("--pat", default=os.getenv("ADO_PAT"), help="Personal Access Token")
    ap.add_argument("--out", default="out/azure-devops", help="Diretório de saída")
    args = ap.parse_args()

    if not args.org_url or not args.project or not args.pat:
        print("Faltou --org-url, --project ou --pat (ou variáveis ADO_ORG_URL/ADO_PROJECT/ADO_PAT).")
        sys.exit(2)

    types = [t.strip() for t in args.types.split(",") if t.strip()]
    where = build_board_like_where(args.area, types, "Removed")

    out_dir = pathlib.Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.auth = ("", args.pat)
    session.headers.update({"Content-Type": "application/json"})

    print("Consultando IDs via WIQL (janelas adaptativas)...")
    ids = fetch_ids_windowed(session, args.org_url, args.project, args.team, where)
    if not ids:
        print("Nenhum Work Item encontrado.")
        return

    print(f"Total de IDs coletados: {len(ids)}. Baixando detalhes em lotes de {BATCH_SIZE}...")
    items = fetch_items_batch(session, args.org_url, ids, DEFAULT_FIELDS)

    print("Gerando Markdown...")
    for wi in items:
        item_to_markdown(wi, out_dir, args.org_url, args.project)

    build_index(items, out_dir)
    print(f"Pronto. Arquivos em: {out_dir.resolve()}")

if __name__ == "__main__":
    main()
