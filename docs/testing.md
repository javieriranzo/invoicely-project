# Guía de testing

Estrategia aprobada en ADR-0019 (Vitest), ADR-0020 (Playwright), ADR-0021 (análisis estático)
y ADR-0023 (Testcontainers).

| Nivel | Herramienta | Qué cubre |
|---|---|---|
| Estático | `tsc --noEmit`, ESLint (reglas con tipos), Prettier | Tipos, errores comunes, formato |
| Unitario | Vitest | Lógica de dominio pura (cálculo de importes, transiciones de estado, permisos) |
| Componentes | Vitest + Testing Library | Componentes React y formularios |
| API / integración | Vitest + `app.inject()` de Fastify + Testcontainers (PostgreSQL 18 real) | Endpoints, validación, permisos, transacciones, migraciones |
| End-to-end | Playwright (escritorio, tablet, móvil) | Flujos completos: login, rutas protegidas, facturación |

## Reglas

- Cada requisito de `openspec/specs/` tiene al menos un test; el nombre del test cita el requisito.
- Mínimos por endpoint: caso feliz, 422, 401, 403, 404 y 409 cuando aplique (skill `api-development`).
- Facturación: tests de concurrencia de la numeración y de inmutabilidad de facturas emitidas.
- Nada se da por terminado sin ejecutar los tests y mostrar el resultado (skill `verification-before-completion`).
- Los tests no dependen de servicios externos reales (correo con Mailpit, sin Internet).

## Comandos

| Comando | Alcance |
|---|---|
| `pnpm test` | Todos los tests de Vitest (shared, API, web) |
| `pnpm --filter @invoicely/api test` | Solo la API (`*.test.ts` junto al código) |
| `pnpm --filter @invoicely/web test` | Solo la web (jsdom + Testing Library) |
| `pnpm --filter <paquete> exec vitest` | Modo vigilancia de un paquete |
| `pnpm e2e` | Compila y ejecuta Playwright en los proyectos `desktop`, `tablet` y `mobile` |
| `pnpm --filter @invoicely/e2e exec playwright test --project=mobile` | Un solo proyecto de Playwright |

## Organización

- Los tests de Vitest viven junto al código: `*.test.ts` / `*.test.tsx`.
- Tests de API: crean la aplicación con `createApp()` (`apps/api/src/app.factory.ts`) y usan `app.inject()`.
- Tests de componentes: `fetch` simulado con `vi.stubGlobal`; si la simulación crece, se propondrá MSW.
- E2E: `e2e/tests/*.spec.ts`. Playwright arranca la API compilada y `vite preview`; reutiliza servidores ya arrancados fuera de CI.
- Los tres proyectos de Playwright usan Chromium con las dimensiones de cada dispositivo; Firefox y WebKit se añadirán si aparece un problema específico.
- Testcontainers (ADR-0023) se incorporará con Prisma en la fase 3.
