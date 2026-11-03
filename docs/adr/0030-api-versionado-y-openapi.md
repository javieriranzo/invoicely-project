# ADR-0030: Versionado de la API en la ruta y documentación OpenAPI

- **Estado:** Aprobado (decidido por recomendación técnica; el responsable delegó la confirmación el 2026-11-02)
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
La API necesita un contrato documentado y una forma de introducir cambios incompatibles.

## Alternativas estudiadas
- Versionado: **en la ruta** (`/api/v1`), por cabecera, o sin versionado.
- Documentación: **`@nestjs/swagger` 12.1** (oficial, soporta NestJS 12 y Fastify), contrato OpenAPI escrito a mano, u otras herramientas.

## Decisión
- Versionado **en la ruta**: prefijo `/api/v1` (sencillo, visible en logs y fácil de enrutar en el proxy).
- Documentación con **`@nestjs/swagger` 12.1.x** generada a partir de los esquemas Zod (soporte de Standard Schema de NestJS 12). Publicada **solo en desarrollo**.

## Consecuencias
- `@nestjs/swagger` declara `class-validator` y `class-transformer` como dependencias *peer*: se comprobará al montar el backend si son necesarias con esquemas Zod; si lo fueran, se documentará aquí.
- Un cambio incompatible requiere `/api/v2` o un plan de migración aprobado.
