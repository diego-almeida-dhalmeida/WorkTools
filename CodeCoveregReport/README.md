Aqui está um `README.md` decente para colocar no GitHub junto com a página HTML que montamos:

````markdown
# Apex Test Coverage Viewer

Uma ferramenta simples em **HTML + JavaScript puro** para visualizar a cobertura de testes em classes e triggers Apex.  
Cole os dados de saída em JSON (com `ApexClassOrTrigger.Name`, `NumLinesCovered` e `NumLinesUncovered`) e veja a cobertura formatada em uma tabela interativa.

---

## ✨ Funcionalidades

- **Entrada via JSON**: cole os dados no campo de texto e carregue.
- **Tabela principal**:
  - Exibe todas as classes/triggers com linhas cobertas, descobertas e percentual de cobertura.
  - Linhas com **cobertura < 80% aparecem em vermelho**.
  - Pesquisa por nome em tempo real.
  - Seleção de linhas por checkbox (individual, todos visíveis ou todos).
- **Tabela refinada**:
  - Mostra apenas os itens selecionados.
  - Calcula média de cobertura e totais para os selecionados.
  - Possibilidade de **exportar CSV**.
- **UI moderna** com dark theme, sem dependências externas.

---

## 🚀 Como usar

1. Baixe ou clone este repositório.
2. Abra o arquivo [`coverage.html`](coverage.html) no navegador.
3. Cole seu JSON no campo **Entrada de dados (JSON)**.
4. Clique em **Carregar JSON**.
5. Use a pesquisa e selecione as linhas que deseja analisar.

---

## Query com Tooling API

```SQL
    SELECT 
        ApexClassOrTrigger.Name, NumLinesCovered, NumLinesUncovered 
    FROM ApexCodeCoverageAggregate 
    ORDER BY 
        ApexClassOrTrigger.Name 
    ASC

````

## 📦 Exemplo de entrada

```json
[
  {
    "ApexClassOrTrigger.Name": "AccountTrigger",
    "NumLinesCovered": 5,
    "NumLinesUncovered": 1
  },
  {
    "ApexClassOrTrigger.Name": "ATL_Utils",
    "NumLinesCovered": 92,
    "NumLinesUncovered": 446
  },
  {
    "ApexClassOrTrigger.Name": "BusinessHoursUtil",
    "NumLinesCovered": 39,
    "NumLinesUncovered": 1
  }
]
````

---

## 📊 Resultado esperado

* Cada linha mostra:

  * Nome da classe/trigger
  * Linhas cobertas
  * Linhas descobertas
  * Percentual de cobertura
* Cobertura **>= 80%** → verde
* Cobertura **< 80%** → vermelho

---

## 🔧 Roadmap / Melhorias futuras

* [ ] Suporte a entrada em CSV/TSV além de JSON.
* [ ] Filtro por percentual de cobertura.
* [ ] Geração de gráficos de pizza/barras com distribuição.
* [ ] Upload de arquivo em vez de colar texto.

---

## 📝 Licença

MIT — use, modifique e quebre à vontade. Só não esqueça de escrever mais testes que a cobertura original.

```

Quer que eu monte também o `package.json` e instruções para abrir com um mini servidor (tipo `npm serve`) ou vai ficar só no HTML estático?
```
