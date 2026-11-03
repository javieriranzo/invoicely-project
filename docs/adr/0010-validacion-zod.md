# ADR-0010: Validación compartida con Zod

- **Estado:** Aprobado (con el ajuste de integración confirmado el 2026-11-02)
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Definir cada regla de validación una vez y aplicarla en formularios (frontend) y,
obligatoriamente, en la API (backend).

## Alternativas estudiadas
- **A. Zod 4 en paquete compartido** + integración con NestJS.
- **B. class-validator**: nativo en NestJS, no reutilizable en frontend, mantenimiento irregular.
- **C. Valibot**: más ligero, menor integración.

## Decisión
**Zod 4** (4.6.x) en un paquete compartido del monorepo; los tipos de los DTO se infieren de los esquemas.

## Ajuste respecto a lo aprobado
Se aprobó integrar Zod en NestJS mediante `nestjs-zod`. Al verificar compatibilidad:
- `nestjs-zod` 5.5.0 solo declara soporte para NestJS 10/11; NestJS 12 (ADR-0008) no está soportado (issue #471 abierta desde 2026-08-27, sin versión publicada).
- NestJS 12 incluye **soporte nativo**: `StandardSchemaValidationPipe` (`@nestjs/common`) y la opción `@Body({ schema })`, compatible con Zod 4 (Standard Schema). La documentación de OpenAPI incluye una sección para estos esquemas.

**Confirmado por el responsable (2026-11-02):** se usa la integración **nativa** de NestJS 12 y **no** se instala `nestjs-zod`.

## Consecuencias
- Una dependencia menos y sin riesgo de compatibilidad con NestJS 12.
- El pipe nativo responde 400 ante datos inválidos; la convención de `api-development` (422 + Problem Details) se aplicará con un filtro de excepciones propio.
- Generación de OpenAPI desde los esquemas: verificar al montar el backend.
