# Guía de instalación del entorno

Verificado en Ubuntu 24.04 el 2026-11-03. Las versiones exactas están en `docs/adr/`.

## Requisitos

| Herramienta | Versión | Comprobación |
|---|---|---|
| nvm | cualquiera reciente | `nvm --version` |
| Node.js | 26 (fijado en `.nvmrc`) | `node --version` → `v26.x` |
| pnpm | 12.x | `pnpm --version` |
| Docker + Compose | Docker ≥ 29, Compose v2 | `docker compose version` |
| Git | ≥ 2.40 | `git --version` |
| OpenSpec | 1.16.0 | `openspec --version` |
| Claude Code | reciente | `claude --version` |

## Pasos

1. **Node.js 26**
   ```bash
   nvm install 26
   cd invoicely-project && nvm use     # lee .nvmrc
   ```
   Node 26 ya no incluye corepack: instala pnpm con npm (siguiente paso).
2. **pnpm 12** (dentro de Node 26): `npm install -g pnpm@12`
3. **OpenSpec** (dentro de Node 26) y su configuración global (ADR-0001):
   ```bash
   npm install -g @fission-ai/openspec@1.16.0
   openspec config set telemetry.enabled false
   openspec config set profile custom
   openspec config set workflows '["propose","explore","apply","update","sync","archive","verify"]'
   ```
4. **Docker**: el usuario debe poder ejecutar `docker ps` sin `sudo`.
5. **Claude Code**: al abrir el proyecto se activan los plugins de `.claude/settings.json`
   (frontend-design, context7, claude-md-management). Autentica context7 con `/mcp`.

## Aplicación

```bash
nvm use                      # Node 26 (.nvmrc)
pnpm install                 # dependencias del monorepo
cp .env.example .env         # y ajusta POSTGRES_PASSWORD
pnpm services:up             # PostgreSQL 18 y Mailpit (espera a que estén sanos)
pnpm --filter @invoicely/e2e exec playwright install chromium   # solo para E2E
pnpm dev                     # API en :3000 y web en http://127.0.0.1:5180
```

pnpm 12 bloquea los scripts de instalación de las dependencias salvo los permitidos en
`allowBuilds` (`pnpm-workspace.yaml`). Si `pnpm install` falla con `ERR_PNPM_IGNORED_BUILDS`,
revisa el paquete y decide si se permite o se deniega allí; no uses `pnpm approve-builds` sin revisarlo.

## Puertos (solo en 127.0.0.1)

| Servicio | Puerto | Variable |
|---|---|---|
| API | 3000 | `API_PORT` |
| Web (desarrollo) | 5180 | — (`apps/web/vite.config.ts`) |
| Web (previsualización, E2E) | 4180 | — |
| PostgreSQL | 5433 | `POSTGRES_PORT` |
| Mailpit SMTP / interfaz | 1025 / 8025 | `MAILPIT_SMTP_PORT` / `MAILPIT_UI_PORT` |

Se evitan 5432 y 5173 porque los usan otros proyectos habituales en el mismo equipo.

## Variables de entorno

Documentadas en `.env.example`. Copia a `.env` y nunca lo subas al repositorio (ADR-0025).
La API valida sus variables con Zod al arrancar (`apps/api/src/config/env.ts`) y no arranca si
alguna no es válida. `pnpm dev` y `pnpm --filter @invoicely/api start` leen el `.env` de la raíz.
