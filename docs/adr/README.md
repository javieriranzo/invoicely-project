# Registro de decisiones arquitectónicas (ADR)

Cada decisión tecnológica o arquitectónica **aprobada por el responsable del proyecto** se
registra aquí. Los ADR no se borran: si una decisión cambia, se crea un ADR nuevo que
**sustituye** al anterior y este pasa a estado `Sustituido por ADR-XXXX`.

Estados posibles: `Propuesto` · `Aprobado` · `Rechazado` · `Sustituido por ADR-XXXX`.

## Índice

| ID | Título | Estado | Fecha |
|---|---|---|---|
| [ADR-0001](0001-gestion-de-especificaciones-con-openspec.md) | Gestión de especificaciones con OpenSpec | Aprobado | 2026-11-02 |
| [ADR-0002](0002-herramientas-de-desarrollo-asistido.md) | Herramientas de desarrollo asistido (skills y plugins de Claude Code) | Aprobado | 2026-11-02 |
| [ADR-0003](0003-arquitectura-spa-api-rest-monorepo.md) | Arquitectura: SPA + API REST independiente en monorepo | Aprobado | 2026-11-02 |
| [ADR-0004](0004-typescript-y-nodejs-26.md) | Lenguaje TypeScript estricto y Node.js 26 LTS | Aprobado | 2026-11-02 |
| [ADR-0005](0005-postgresql.md) | Motor de base de datos: PostgreSQL | Aprobado | 2026-11-02 |
| [ADR-0006](0006-monorepo-pnpm-workspaces.md) | Monorepo con workspaces de pnpm | Aprobado | 2026-11-02 |
| [ADR-0007](0007-frontend-react-vite.md) | Frontend con React y Vite | Aprobado | 2026-11-02 |
| [ADR-0008](0008-backend-nestjs-fastify.md) | Backend con NestJS sobre Fastify | Aprobado | 2026-11-02 |
| [ADR-0009](0009-orm-prisma.md) | ORM y migraciones con Prisma | Aprobado | 2026-11-02 |
| [ADR-0010](0010-validacion-zod.md) | Validación compartida con Zod | Aprobado | 2026-11-02 |
| [ADR-0011](0011-estilos-tailwind-shadcn.md) | Estilos con Tailwind CSS y componentes shadcn/ui | Aprobado | 2026-11-02 |
| [ADR-0012](0012-rutas-tanstack-router.md) | Rutas con TanStack Router | Aprobado | 2026-11-02 |
| [ADR-0013](0013-datos-servidor-tanstack-query.md) | Datos del servidor con TanStack Query (sin librería de estado global) | Aprobado | 2026-11-02 |
| [ADR-0014](0014-formularios-react-hook-form.md) | Formularios con React Hook Form | Aprobado | 2026-11-02 |
| [ADR-0015](0015-autenticacion-propia-nestjs.md) | Autenticación propia en NestJS | Aprobado | 2026-11-02 |
| [ADR-0016](0016-sesiones-en-servidor.md) | Sesiones almacenadas en servidor (PostgreSQL) | Aprobado | 2026-11-02 |
| [ADR-0017](0017-hash-argon2id.md) | Hash de contraseñas con Argon2id | Aprobado | 2026-11-02 |
| [ADR-0018](0018-correo-smtp.md) | Envío de correo por SMTP con proveedor intercambiable | Aprobado | 2026-11-02 |
| [ADR-0019](0019-tests-vitest.md) | Tests unitarios y de integración con Vitest | Aprobado | 2026-11-02 |
| [ADR-0020](0020-e2e-playwright.md) | Tests end-to-end con Playwright | Aprobado | 2026-11-02 |
| [ADR-0021](0021-analisis-estatico-eslint-prettier.md) | Análisis estático con ESLint + typescript-eslint y Prettier | Aprobado | 2026-11-02 |
| [ADR-0022](0022-contenedores-docker.md) | Contenedores con Docker y Docker Compose | Aprobado | 2026-11-02 |
| [ADR-0023](0023-tests-integracion-testcontainers.md) | Base de datos real en tests de integración con Testcontainers | Aprobado | 2026-11-02 |
| [ADR-0024](0024-ci-github-actions.md) | Integración continua con GitHub Actions | Aprobado | 2026-11-02 |
| [ADR-0025](0025-secretos-variables-entorno.md) | Gestión de secretos mediante variables de entorno | Aprobado | 2026-11-02 |
| [ADR-0026](0026-criterios-proveedores-produccion.md) | Criterios para los proveedores de producción (elección aplazada) | Aprobado | 2026-11-02 |
| [ADR-0027](0027-logging-pino.md) | Logging estructurado con Pino | Aprobado | 2026-11-02 |
| [ADR-0028](0028-politica-copias-seguridad.md) | Política de copias de seguridad en tres capas | Aprobado | 2026-11-02 |
| [ADR-0029](0029-auditoria-en-aplicacion.md) | Auditoría a nivel de aplicación en la misma transacción | Aprobado | 2026-11-02 |
| [ADR-0030](0030-api-versionado-y-openapi.md) | Versionado de la API en la ruta y documentación OpenAPI | Aprobado | 2026-11-02 |
| [ADR-0031](0031-eslint-plugin-jsx-a11y-x.md) | Reglas de accesibilidad con `eslint-plugin-jsx-a11y-x` | Aprobado | 2026-11-03 |
| [ADR-0032](0032-vitest-sin-unplugin-swc.md) | Vitest sin `unplugin-swc` y paquete compartido desde el código fuente | Aprobado | 2026-11-03 |

## Plantilla

```markdown
# ADR-XXXX: Título

- **Estado:** Propuesto | Aprobado | Rechazado | Sustituido por ADR-XXXX
- **Fecha:** AAAA-MM-DD
- **Decisor:** responsable del proyecto

## Contexto y problema
## Alternativas estudiadas
## Decisión
## Motivos
## Consecuencias
```
