# ADR-0023: Base de datos real en tests de integración con Testcontainers

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
La numeración sin huecos, las transacciones y las migraciones deben probarse contra PostgreSQL real.

## Alternativas estudiadas
- **A. Testcontainers 12**: PostgreSQL 18 limpio por ejecución; igual en local y CI; segundos de arranque.
- **B. Base de datos de test fija en Compose**: arranque instantáneo; riesgo de contaminación entre tests.
- **C. pg-mem**: no es PostgreSQL real; falsos positivos.

## Decisión
**Testcontainers** (`testcontainers` y `@testcontainers/postgresql` 12.2.x) con la misma imagen de PostgreSQL 18 que en desarrollo. Requiere Docker (ADR-0022) y Node ≥ 22.22 (cumplido).

## Consecuencias
- Las migraciones de Prisma se aplican al contenedor antes de los tests de integración.
