# Base de datos

- Motor: PostgreSQL 18 (ADR-0005). ORM y migraciones: Prisma 7.10.1 (ADR-0009).
- Convenciones (nombres, importes, integridad, transacciones, índices, auditoría): `.claude/skills/database-architecture/SKILL.md`.
- Auditoría: ADR-0029. Copias de seguridad: ADR-0028.

## Modelo de datos

Pendiente de la fase "Diseño de base de datos" del plan. Depende de las cuestiones abiertas
de negocio (`docs/cuestiones-abiertas.md`). Se documentará aquí con un diagrama entidad-relación
generado a partir de `schema.prisma`.
