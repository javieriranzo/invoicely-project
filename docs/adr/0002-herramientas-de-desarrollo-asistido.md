# ADR-0002: Herramientas de desarrollo asistido (skills y plugins de Claude Code)

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Se necesita un conjunto de skills útil, mantenible, de procedencia fiable y sin duplicidades
con lo que ya incluye Claude Code (`/code-review`, `/simplify`, `/security-review`) ni con el
flujo de OpenSpec.

## Alternativas estudiadas
- Plugins oficiales de Anthropic (`claude-plugins-official`): frontend-design, code-review, code-simplifier, pr-review-toolkit, feature-dev, commit-commands, claude-md-management, security-guidance, claude-security.
- context7 (Upstash), playwright (Microsoft), prisma.
- Superpowers (Jesse Vincent, MIT): plugin completo o selección de skills.
- Skills comunitarias genéricas (responsive-design, data-tables, sql-query-builder, …): sin procedencia fiable → descartadas.

## Decisión
- Plugins con ámbito de proyecto (`.claude/settings.json`): **frontend-design**, **context7**, **claude-md-management**.
- Superpowers: **solo** `systematic-debugging`, `test-driven-development` y `verification-before-completion`, copiadas en `.claude/skills/` y fijadas al commit `2ce8aa15d05bd57213e6f746f953aafb7ded7a8b` (ver `VENDORED.md` en cada skill).
- `security-guidance`: se reconsiderará al iniciar la fase de autenticación.
- Skills dependientes del stack (shadcn, react-best-practices, playwright, ORM): se evaluarán al aprobar cada tecnología.
- Skills propias: business-domain, invoicing-management, database-architecture, api-development, project-conventions.

## Motivos
Mínimo conjunto sin solapamientos. El plugin completo de Superpowers instala un hook de
inicio de sesión que impone un flujo de planificación paralelo al de OpenSpec.

## Consecuencias
- context7 es un servicio externo (recibe nombres de librerías y consultas, no código) y requiere autenticación con `/mcp`.
- Las skills copiadas de Superpowers se actualizan manualmente.
