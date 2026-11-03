## 1. Raíz del monorepo

- [x] 1.1 `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, Prettier y ESLint. Verificación: `pnpm install` sin errores.
- [x] 1.2 ADR-0031 (`eslint-plugin-jsx-a11y-x`) e índice de ADR actualizado. Verificación: revisión del enlace en `docs/adr/README.md`.

## 2. Paquete compartido

- [x] 2.1 `packages/shared` con `healthResponseSchema` y test unitario. Verificación: `pnpm --filter @invoicely/shared test` en verde.

## 3. API

- [x] 3.1 Esqueleto NestJS + Fastify, validación del entorno, Pino, prefijo `/api/v1`, Swagger en desarrollo. Verificación: `pnpm --filter @invoicely/api build` y arranque manual con `curl /api/v1/health`.
- [x] 3.2 Test de API del endpoint de salud (200, solo `status`). Verificación: `pnpm --filter @invoicely/api test` en verde.
- [x] 3.3 Test unitario de la validación del entorno (rechaza configuración inválida). Verificación: test en verde.

## 4. Web

- [x] 4.1 Esqueleto React + Vite + Tailwind + TanStack Router y Query; página inicial en español. Verificación: `pnpm --filter @invoicely/web build`.
- [x] 4.2 Test de componente de la página inicial (servicio disponible / no disponible). Verificación: `pnpm --filter @invoicely/web test` en verde.

## 5. E2E

- [x] 5.1 Playwright con proyectos escritorio, tablet y móvil y test de la página inicial contra la API real. Verificación: `pnpm e2e` en verde.

## 6. Servicios y CI

- [x] 6.1 `compose.yaml` (PostgreSQL 18 y Mailpit en 127.0.0.1) y `.env.example`. Verificación: `docker compose up -d` y `docker compose ps` con ambos servicios sanos.
- [x] 6.2 `.github/workflows/ci.yml` con acciones fijadas por SHA. Verificación: los mismos pasos de la CI en verde en local (2026-11-03). **No verificado en GitHub**: la primera ejecución requiere commit y push del responsable; queda como tarea en `docs/plan-de-desarrollo.md` (primeras tareas, punto 1).

## 7. Documentación

- [x] 7.1 Comandos en `docs/desarrollo.md`, `docs/testing.md` y `README.md`; estructura confirmada en la skill `project-conventions`; plan actualizado. Verificación: revisión de enlaces.

## Evidencia de verificación (2026-11-03, compilación limpia)

- `pnpm install --frozen-lockfile`, `pnpm format:check`, `pnpm build`, `pnpm lint`, `pnpm typecheck`: sin errores.
- `pnpm test`: shared 3/3, API 6/6, web 3/3.
- `pnpm e2e`: 6/6 (desktop, tablet, mobile).
- `docker compose up`: postgres 18.6 y mailpit v1.33.0 sanos en 127.0.0.1 (5433, 1025, 8025).
- `pnpm dev`: `/api/v1/health` a través del proxy de la web → `{"status":"ok"}`; Swagger 200 en desarrollo y 404 en producción.
