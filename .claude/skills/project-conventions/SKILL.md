---
name: project-conventions
description: Convenciones generales de Invoicely App (estructura del proyecto, nombres, organización de carpetas, patrones de diseño, errores y excepciones, logging, Git y commits, estándares de calidad, documentación y definición de terminado). Usar al crear archivos o módulos, al hacer commits, al escribir logs o manejar errores, y antes de dar una tarea por terminada.
---

# Convenciones del proyecto

> Stack aprobado: ver `CLAUDE.md` (resumen) y `docs/adr/` (decisiones y versiones).
> Esta skill no repite versiones: enlaza al ADR correspondiente.

## Idioma
- Código, identificadores, API, BD, nombres de ramas: **inglés**.
- Documentación, especificaciones OpenSpec, ADR, mensajes de commit: **español**.
- Textos visibles en la interfaz: **español** (la UI es solo en español).
- Comentarios de código: en español y solo cuando explican el *porqué*.

## Estructura del proyecto (ADR-0003, ADR-0006)
```
apps/
  web/                 SPA React + Vite (ADR-0007)
    src/routes/        rutas de TanStack Router (basadas en archivos)
    src/modules/<mod>/ componentes, hooks de Query y formularios de cada módulo
    src/components/ui/ componentes shadcn/ui (código propio)
  api/                 API NestJS + Fastify (ADR-0008)
    src/modules/<mod>/ <mod>.module.ts, controller, service, repository, tests
    src/common/        guards, filtros de excepción, pipes, logging
    prisma/            schema.prisma y migraciones (ADR-0009)
packages/
  shared/              esquemas Zod, tipos y constantes compartidos (ADR-0010)
e2e/                   tests Playwright (ADR-0020)
```
Principios:
- Organización **por módulo de negocio** (customers, invoices, …), no por tipo técnico.
- Cada módulo agrupa su dominio, acceso a datos, API y tests.
- El frontend y el backend solo comparten código a través de `packages/shared`.
- Sin dependencias circulares entre módulos.
- Estructura confirmada con el esqueleto (2026-11-03). Paquetes: `@invoicely/api`, `@invoicely/web`, `@invoicely/shared`, `@invoicely/e2e`.
- Tests junto al código (`*.test.ts[x]`); `src/modules/system` (web) y `src/modules/health` (API) son el ejemplo de referencia.
- `apps/api/src/app.factory.ts` crea la aplicación (la usan `main.ts` y los tests); `src/config/env.ts` valida el entorno.
- Desde `packages/shared` solo se exporta por `src/index.ts`; ESM con imports relativos terminados en `.js` en API y shared.
- Web: alias `@/` → `apps/web/src`; rutas de la interfaz en español (`/clientes`, `/facturas`); componentes base en `src/components/ui` (shadcn/ui sobre Base UI) y marca en `src/components/brand` (ADR-0033). Guía visual: `docs/sistema-de-diseno.md`.

## Nombres
- Archivos y carpetas: `kebab-case`.
- Tipos/clases/componentes: `PascalCase`; funciones y variables: `camelCase`; constantes: `UPPER_SNAKE_CASE`.
- Nombres de negocio según el glosario de la skill `business-domain`.

## Patrones de diseño
- Lógica de negocio en una capa de servicio/dominio independiente del transporte HTTP y de la UI.
- Controladores/rutas finos: validar entrada → llamar al servicio → mapear respuesta.
- Sin lógica de negocio en componentes de UI; la UI consume la API.
- Preferir composición y funciones puras; evitar abstracciones especulativas.

## Errores y excepciones
- Errores de dominio tipados (p. ej. `InvoiceAlreadyIssuedError`) traducidos a HTTP en un único punto (ver `api-development`).
- Nunca silenciar errores (`catch` vacío) ni devolver `null` para indicar fallo.
- Los errores inesperados se registran con `requestId` y se devuelven como 500 genérico.

## Logging (Pino + nestjs-pino, ADR-0027)
- Logs estructurados (JSON) con nivel, `requestId`, `userId` cuando exista y módulo.
- Niveles: `error` (requiere acción), `warn` (anómalo pero gestionado), `info` (eventos de negocio relevantes), `debug` (solo desarrollo).
- **Nunca** registrar contraseñas, tokens, cookies, datos bancarios ni el cuerpo completo de peticiones con datos personales.
- Logging ≠ auditoría: la auditoría de negocio va a su tabla (ver `database-architecture`).

## Git
Convenciones completas en `docs/convenciones-git.md` (fuente única). Lo esencial:
- Ramas `feat/<cambio-openspec>`, `fix/…`, `chore/…`, `docs/…`; `main` siempre estable.
- Conventional Commits con descripción en español.
- No se hace commit ni push sin que el responsable lo pida.

## Estándares de calidad
- TypeScript estricto (ADR-0004); sin `any` implícitos ni desactivar reglas sin comentario justificativo.
- ESLint con reglas de tipos + Prettier (ADR-0021) y `tsc --noEmit` en CI (ADR-0024).
- Tests según la skill `test-driven-development` y la estrategia de testing aprobada.
- Revisión antes de integrar: `/code-review` y, en cambios sensibles (auth, facturación, permisos), `/security-review`.

## Documentación
- Requisitos y cambios → OpenSpec. Decisiones de arquitectura → `docs/adr/`. Instrucciones permanentes para Claude → `CLAUDE.md`. Procedimientos especializados → skills.
- No duplicar: enlazar al documento fuente.
- Cada módulo nuevo actualiza la documentación afectada (API, BD, guía de desarrollo) en el mismo cambio.

## Definición de terminado
Una tarea solo está terminada cuando:
1. Implementa exactamente lo aprobado en la propuesta OpenSpec.
2. Tiene tests y **se han ejecutado** con resultado verde (pegar la evidencia).
3. Lint/tipos sin errores.
4. No rompe tests existentes.
5. La documentación afectada está actualizada.
6. `/opsx:verify` no reporta incidencias críticas.
Si algo no pudo verificarse, se indica explícitamente; nunca se marca como completado.
