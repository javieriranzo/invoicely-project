# API REST

- Framework: NestJS 12 sobre Fastify (ADR-0008). Prefijo y versión: `/api/v1` (ADR-0030).
- Convenciones (rutas, paginación, errores Problem Details, autenticación, permisos, tests): `.claude/skills/api-development/SKILL.md`.
- Contrato: OpenAPI generado con `@nestjs/swagger`, publicado solo en desarrollo (ADR-0030).

## Endpoints

Ninguno implementado todavía. Cada cambio de OpenSpec que añada endpoints los documenta en
su `design.md`; el contrato vivo será el OpenAPI generado.
