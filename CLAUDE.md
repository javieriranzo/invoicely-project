# CLAUDE.md — Invoicely App

Instrucciones permanentes para Claude Code. No duplicar aquí lo que ya vive en otra fuente:

| Fuente | Contiene |
|---|---|
| `openspec/specs/` | **Fuente de verdad** de requisitos funcionales (OpenSpec) |
| `openspec/changes/` | Propuestas, tareas y cambios en curso; `archive/` = historial |
| `docs/adr/` | Decisiones arquitectónicas y tecnológicas aprobadas, con versiones |
| `.claude/skills/` | Procedimientos especializados (dominio, facturación, BD, API, convenciones) |
| `docs/` | Documentación para personas (instalación, desarrollo, testing, plan) |

## Proyecto

**Invoicely App** es un ERP ligero (SPA) para una pequeña empresa que opera en **España**
(territorio común). Módulos: autenticación, dashboard, usuarios, roles y permisos, productos,
categorías, clientes, pedidos, facturas, pagos, impuestos, informes,
configuración de empresa y auditoría. Se desarrolla por fases (`docs/plan-de-desarrollo.md`).

Idioma: documentación, specs, ADR y commits en **español**; código, API y BD en **inglés**;
interfaz **solo en español**. Mantén el nombre "Invoicely App" en documentación e interfaz.

## Stack aprobado (detalle y versiones en `docs/adr/`)

- Arquitectura: SPA + API REST independiente en monorepo pnpm (ADR-0003, 0006). Node.js 26 (`.nvmrc`), TypeScript 6.0 estricto (ADR-0004).
- Frontend: React 19 + Vite 8, Tailwind CSS 4 + shadcn/ui sobre Base UI (skill `shadcn`), TanStack Router, TanStack Query (sin estado global), React Hook Form (ADR-0007, 0011–0014, 0033). Reglas visuales en `docs/sistema-de-diseno.md`; solo modo claro; accesibilidad WCAG 2.2 AA comprobada con axe (ADR-0034).
- Backend: NestJS 12 sobre Fastify, validación Zod 4 nativa (`StandardSchemaValidationPipe`, sin `nestjs-zod`), Pino, OpenAPI con `@nestjs/swagger`, API en `/api/v1` (ADR-0008, 0010, 0027, 0030).
- Datos: PostgreSQL 18, Prisma **7.10.1 fijado** (nunca instalar sin versión: `latest` es una RC), auditoría en la aplicación (ADR-0005, 0009, 0029).
- Autenticación: propia, sesiones en servidor con cookie `HttpOnly`, Argon2id, correo por SMTP (Mailpit en desarrollo) (ADR-0015–0018).
- Calidad: Vitest 5, Playwright, Testcontainers, ESLint + typescript-eslint + Prettier, GitHub Actions (ADR-0019–0024).
- Operación: Docker Compose, secretos en variables de entorno, proveedores de producción aplazados con criterios fijados, copias en tres capas (ADR-0022, 0025, 0026, 0028).

Entorno: ejecuta `source ~/.nvm/nvm.sh && nvm use` antes de usar `node`/`pnpm` (el Node por defecto del sistema es 22).
Comandos en `docs/desarrollo.md`. Verificación completa (igual que la CI): `pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm e2e`.
Puertos propios (3000, 5180, 4180, 5433): 5173 y 5432 los usan otros proyectos del equipo.

## Decisiones tecnológicas

- Desde el 2026-11-02 el responsable ha delegado la confirmación: investiga, compara, **aplica la opción recomendada**, regístrala en un ADR nuevo (plantilla en `docs/adr/README.md`) e informa después explicando alternativas y motivo.
- No reabras decisiones aprobadas salvo razón técnica justificada; una sustitución tecnológica requiere ADR nuevo que sustituya al anterior y propuesta OpenSpec.
- Antes de añadir cualquier dependencia: comprueba versión vigente, licencia, mantenimiento y compatibilidad con Node 26, TypeScript 6.0 y NestJS 12. Fija versiones.
- Evita la inventiva en reglas de negocio y requisitos legales: pregunta al responsable (ver `docs/cuestiones-abiertas.md`).

## Flujo obligatorio para cada funcionalidad o cambio (OpenSpec)

1. Consulta `openspec list --specs` y las specs afectadas; detecta conflictos.
2. `/opsx:propose`: proposal (con fuera de alcance y cuestiones abiertas), design (BD, API, frontend por separado), specs delta y tasks con verificación concreta.
3. Si la propuesta contiene reglas de negocio no acordadas, pregunta antes de implementar.
4. `/opsx:apply`: implementa **solo** las tareas de la propuesta, con tests (skill `test-driven-development`).
5. Ejecuta tests, lint y tipos; no rompas lo existente.
6. `/opsx:verify` y skill `verification-before-completion`: sin evidencia no hay "terminado".
7. Actualiza la documentación afectada y `/opsx:archive`.

Si algo no puede verificarse, dilo explícitamente. Ante un error, aplica `systematic-debugging` antes de corregir.

## Seguridad (reglas no negociables)

- Toda ruta y endpoint es privado por defecto; los públicos se marcan explícitamente.
- El backend verifica **siempre** sesión y permiso (`recurso:acción`) en cada petición; la interfaz solo oculta.
- Validación en servidor de toda entrada; errores sin detalles internos; Problem Details (skill `api-development`).
- Contraseñas solo como hash Argon2id; nunca en logs ni auditoría. Sin secretos en el repositorio (es **público**).
- Facturas emitidas inmutables; rectificación solo con factura rectificativa (skill `invoicing-management`).
- Operaciones importantes auditadas en la misma transacción (ADR-0029).
- En cambios de autenticación, permisos o facturación ejecuta `/security-review`; al implementar autenticación activa el plugin `security-guidance` (ADR-0002, ADR-0015).

## Testing

- Lógica de negocio y API: Vitest; API con `app.inject()`; BD real con Testcontainers.
- Flujos de usuario: Playwright en escritorio, tablet y móvil.
- Cada requisito de una spec tiene al menos un test que lo cubre. Guía: `docs/testing.md`.

## Git

Convenciones en `docs/convenciones-git.md`. No hagas commit ni push salvo que el responsable lo pida.
