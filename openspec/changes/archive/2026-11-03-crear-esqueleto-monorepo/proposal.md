## Why

Todas las fases siguientes necesitan una base de código común con tests, lint, tipos y CI funcionando
desde el primer día (plan de desarrollo, fase 1). Sin el esqueleto no se puede implementar ni verificar
ningún módulo de negocio.

## What Changes

- Monorepo con workspaces de pnpm (ADR-0006): `apps/web`, `apps/api`, `packages/shared`, `e2e/`.
- Configuración común de TypeScript 6.0 estricto, ESLint 10 + typescript-eslint, Prettier.
- `apps/api`: NestJS 12 sobre Fastify, prefijo `/api/v1`, logging Pino, validación de variables de entorno con Zod, OpenAPI solo en desarrollo, endpoint público `GET /api/v1/health`.
- `apps/web`: React 19 + Vite 8, Tailwind 4, TanStack Router y Query, página inicial "Invoicely App" en español que muestra el estado de la API.
- `packages/shared`: esquema Zod de la respuesta de salud, compartido por API y web.
- Tests de cada nivel: unitario (Vitest), componente (Testing Library), API (`app.inject()`), E2E (Playwright en escritorio, tablet y móvil).
- `compose.yaml` con PostgreSQL 18 y Mailpit en `127.0.0.1`, y `.env.example`.
- CI en GitHub Actions: formato, lint, tipos, tests y E2E.
- Documentación de comandos en `docs/desarrollo.md` y `docs/testing.md`.
- Nuevo ADR-0031: `eslint-plugin-jsx-a11y-x` en lugar de `eslint-plugin-jsx-a11y` (el original no admite ESLint 10).

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `architecture`: se añade el requisito de comprobación de salud del sistema.

## Fuera de alcance

- Prisma, esquema de base de datos y Testcontainers (fase 3; el contenedor de PostgreSQL se levanta pero la API aún no se conecta).
- Autenticación, sesiones, permisos y auditoría (fase 4). El endpoint de salud es público y no expone datos internos.
- shadcn/ui y sistema de diseño (fase 2). Solo se instala Tailwind.
- Dockerfile de producción y despliegue (fase 13).
- Skills `shadcn` y `playwright-cli`: se evaluarán en la fase 2 al incorporar shadcn/ui y los primeros flujos E2E reales.

## Decisiones pendientes

- Ninguna de negocio. Visibilidad del repositorio (cuestión 25): afecta a la CI solo en los minutos disponibles; no bloquea.

## Impact

- Nuevas dependencias (versiones fijadas, comprobadas el 2026-11-03 con Node 26.13 y pnpm 12.16).
- Nuevos archivos raíz: `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, `eslint.config.js`, `.prettierrc.json`, `compose.yaml`, `.env.example`, `.github/workflows/ci.yml`.
