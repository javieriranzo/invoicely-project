# Guía de desarrollo

## Forma de trabajo

Todo cambio funcional sigue el flujo de OpenSpec (detalle en `CLAUDE.md`):
proponer (`/opsx:propose`) → aprobar → implementar (`/opsx:apply`) → probar →
verificar (`/opsx:verify`) → documentar → archivar (`/opsx:archive`).

- Especificaciones vigentes: `openspec list --specs`, `openspec show <spec> --type spec`.
- Cambios en curso: `openspec list`. Historial: `openspec/changes/archive/`.
- Decisiones tecnológicas: `docs/adr/`. Una tecnología nueva requiere ADR.
- Decisiones de negocio pendientes: `docs/cuestiones-abiertas.md`.

## Estructura del monorepo

```
apps/api         @invoicely/api    NestJS 12 + Fastify (src/modules/<módulo>, src/config)
apps/web         @invoicely/web    React 19 + Vite 8 (src/routes, src/modules/<módulo>)
packages/shared  @invoicely/shared Esquemas Zod y tipos compartidos
e2e/             @invoicely/e2e    Tests Playwright
docs/            Documentación
openspec/        Especificaciones y cambios
```
Detalle y principios en `.claude/skills/project-conventions/SKILL.md`.

`packages/shared` se usa desde su código fuente en desarrollo y tests (condición de exportación
`@invoicely/source`) y desde `dist/` cuando la API se ejecuta compilada (ADR-0032).

## Comandos (desde la raíz)

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Compila `shared` y arranca API (`:3000`, recarga en caliente) y web (`:5180`, con proxy de `/api`) |
| `pnpm build` | Compila todos los paquetes en orden |
| `pnpm lint` | ESLint con reglas de tipos en todo el monorepo |
| `pnpm typecheck` | `tsc --noEmit` en cada paquete |
| `pnpm format` / `pnpm format:check` | Prettier (escribir / comprobar) |
| `pnpm test` | Tests unitarios, de componentes y de API |
| `pnpm e2e` | Compila y ejecuta Playwright (arranca API y web por sí mismo) |
| `pnpm services:up` / `pnpm services:down` | Arranca / para PostgreSQL y Mailpit |

En desarrollo, la documentación OpenAPI está en http://127.0.0.1:3000/api/docs (no se publica
fuera de `NODE_ENV=development`, ADR-0030) y Mailpit en http://127.0.0.1:8025.

Antes de dar un cambio por terminado: `pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm e2e`
(es lo mismo que ejecuta la CI, `.github/workflows/ci.yml`).

## Convenciones

Las convenciones detalladas están en las skills del proyecto (fuente única, válidas también para personas):

| Tema | Fuente |
|---|---|
| Nombres, estructura, errores, logging, calidad, definición de terminado | `.claude/skills/project-conventions/SKILL.md` |
| Dominio y glosario ES→EN | `.claude/skills/business-domain/SKILL.md` |
| Facturación (normativa española) | `.claude/skills/invoicing-management/SKILL.md` |
| Base de datos | `.claude/skills/database-architecture/SKILL.md` |
| API | `.claude/skills/api-development/SKILL.md` |
| Git | `docs/convenciones-git.md` |

## Herramientas de Claude Code

- Plugins de proyecto: `frontend-design`, `context7`, `claude-md-management` (ADR-0002).
- Skills: las cinco del proyecto, tres de Superpowers (`systematic-debugging`, `test-driven-development`, `verification-before-completion`) y las de OpenSpec.
- Comandos útiles: `/opsx:*`, `/code-review`, `/security-review`, `/simplify`.
