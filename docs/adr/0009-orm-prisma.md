# ADR-0009: ORM y migraciones con Prisma

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Acceso tipado a PostgreSQL (ADR-0005) con transacciones fiables (emisión atómica de
facturas) y migraciones versionadas.

## Alternativas estudiadas
- **A. Prisma 7**: el ORM TypeScript más maduro; esquema declarativo; migraciones SQL revisables; SQL tipado para casos complejos.
- **B. Drizzle ORM 0.45**: "SQL con tipos", control total; aún 0.x y drizzle-kit menos maduro.
- **C. Kysely / query builder**: máximo control; más trabajo manual.

## Decisión
**Prisma 7.10.1**, versión **fijada exactamente** (`prisma` y `@prisma/client`).
Migraciones con Prisma Migrate (SQL generado, revisado y versionado en el repositorio).

## Motivos
Estabilidad y madurez de migraciones prioritarias en un ERP con datos fiscales.

## Consecuencias
- ⚠️ A 2026-11-02 la etiqueta `latest` de npm de `prisma` apunta a `8.0.0-rc.29` (versión candidata). **Nunca instalar sin versión explícita.** La actualización a Prisma 8 requerirá propuesta.
- Bloqueos de numeración de series y consultas de informes: SQL tipado de Prisma dentro de transacciones interactivas.
- Prisma 7 requiere Node `^20.19 || ^22.12 || >=24` (cumplido) y TypeScript ≥ 5.4 (cumplido con 6.0).
- Los servicios en la nube de Prisma (Accelerate, Prisma Postgres) **no** se usan.
- Plugin de Claude Code `prisma`: evaluado y **no recomendado** (solo expone la CLI vía MCP y la gestión de Prisma Postgres en la nube).
