# Revise.it — Skeleton

Esqueleto mínimo para um app de **revisão espaçada** com integração opcional ao **Google Calendar**.
Inclui:
- **server/** (Node.js + TypeScript + Express + Prisma)
- **web/** (Vite + React) para testar rotas e acionar agendamentos
- Algoritmo **SM‑2** pronto e um **MVP de intervalos fixos**

> É um esqueleto. Não é um unicórnio full-stack com glitter. Mas roda, compila e não te julga. Muito.

## Requisitos
- Node 18+
- npm 9+
- (Opcional) Docker + docker-compose, se quiser subir Postgres local
- Conta Google para OAuth (Calendar)

## Rodar rápido (modo desenvolvimento)
```bash
# 1) Server
cd server
cp .env.example .env            # preencha as variáveis
npm i
npm run prisma:dev              # cria o banco SQLite dev
npm run dev                     # http://localhost:4000/health

# 2) Web (apenas utilitário para testar)
cd ../web
npm i
npm run dev                     # http://localhost:5173
```

## Variáveis de ambiente (server/.env)
- `PORT` porta da API (default 4000)
- `DATABASE_URL` string do Prisma (por padrão usa SQLite local)
- `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` para OAuth
- `GOOGLE_REDIRECT_URI` ex: `http://localhost:4000/oauth/google/callback`
- `DEFAULT_TZ` fuso do usuário, ex: `America/Sao_Paulo`

## Fluxo
1. Crie um **Item** em um **Deck**.
2. Faça uma **Review** com nota 0–5.
3. O motor recalcula `interval_days` + `due_date` (SM‑2) e agenda o próximo evento.
4. Se integração Google estiver ativa, cria/atualiza o evento no Calendar.

## Rotas principais (server)
- `GET /health`
- `POST /decks` criar deck
- `POST /items` criar item
- `POST /reviews` registrar review e agendar próxima
- `GET /due` listar itens vencendo hoje
- `POST /calendar/connect` iniciar OAuth (placeholder)
- `POST /calendar/schedule` agendar manualmente (stub)

## Banco
- Prisma + SQLite no dev. Troque para Postgres ajustando `DATABASE_URL`.

## Calendário Google
O arquivo `src/services/calendar.ts` contém stubs usando `googleapis`. Preencha o OAuth e a persistência do token de verdade.

Boa sorte. E revise.
