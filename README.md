# Invoicely App

ERP ligero para pequeñas empresas que operan en España: clientes, productos,
pedidos, facturación conforme a la normativa española, pagos, informes y auditoría, con
autenticación y permisos por rol. Aplicación web (SPA) responsive, en español.

> **Estado (2026-11-03):** fase 1 terminada; fase 2 con las reglas de negocio acordadas y el sistema de diseño pendiente de aprobación visual.
> Todavía no hay módulos de negocio. Ver `docs/plan-de-desarrollo.md`.

## Inicio rápido

```bash
nvm use && pnpm install
cp .env.example .env
pnpm services:up
pnpm dev            # http://127.0.0.1:5180
```

Detalle en [docs/instalacion.md](docs/instalacion.md) y comandos en [docs/desarrollo.md](docs/desarrollo.md).

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React 19, Vite 8, TypeScript 6, Tailwind CSS 4, shadcn/ui (Base UI), TanStack Router y Query, React Hook Form, Zod 4 |
| Backend | NestJS 12 sobre Fastify, Zod 4, Pino, OpenAPI |
| Datos | PostgreSQL 18, Prisma 7 |
| Calidad | Vitest, Playwright, Testcontainers, ESLint, Prettier, GitHub Actions |
| Entorno | Node.js 26, pnpm 12 (monorepo), Docker Compose |

Cada elección está justificada en [`docs/adr/`](docs/adr/README.md).

## Documentación

| Documento | Contenido |
|---|---|
| [docs/instalacion.md](docs/instalacion.md) | Preparar el entorno de desarrollo |
| [docs/desarrollo.md](docs/desarrollo.md) | Cómo se trabaja: OpenSpec, estructura, convenciones |
| [docs/testing.md](docs/testing.md) | Estrategia y tipos de tests |
| [docs/convenciones-git.md](docs/convenciones-git.md) | Ramas, commits y revisiones |
| [docs/arquitectura.md](docs/arquitectura.md) | Visión general de la arquitectura |
| [docs/base-de-datos.md](docs/base-de-datos.md) | Base de datos |
| [docs/api.md](docs/api.md) | API REST |
| [docs/sistema-de-diseno.md](docs/sistema-de-diseno.md) | Colores, tipografía, componentes y reglas visuales |
| [docs/adr/](docs/adr/README.md) | Registro de decisiones arquitectónicas |
| [docs/plan-de-desarrollo.md](docs/plan-de-desarrollo.md) | Plan por fases |
| [docs/cuestiones-abiertas.md](docs/cuestiones-abiertas.md) | Decisiones de negocio pendientes |
| [openspec/specs/](openspec/specs) | Especificaciones funcionales (fuente de verdad) |
| [CLAUDE.md](CLAUDE.md) | Instrucciones para Claude Code |

## Licencia

Pendiente de decisión del propietario del proyecto.
