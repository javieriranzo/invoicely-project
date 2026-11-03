# ADR-0027: Logging estructurado con Pino

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Logs JSON estructurados con identificador de petición y usuario, sin datos sensibles.

## Alternativas estudiadas
- **A. Pino 10 + `nestjs-pino` 5.3**: logger nativo de Fastify, el más rápido, ocultación (`redact`) de campos sensibles; compatible con NestJS 12 (peer `^11.0.8 || ^12.0.2`).
- **B. Winston + `nest-winston`**: flexible; más lento, sin integración con Fastify.
- **C. Logger incorporado de NestJS**: sin JSON estructurado ni ocultación.

## Decisión
**Pino 10.4.x + `nestjs-pino` 5.3.x + `pino-http` 11.x**; `pino-pretty` solo en desarrollo.

## Consecuencias
- `redact` obligatorio para `authorization`, `cookie`, `set-cookie`, contraseñas y tokens.
- Cada línea incluye `requestId` (cabecera `X-Request-Id`) y `userId` cuando exista.
- Destino de los logs en producción: se decidirá con los proveedores (ADR-0026).
