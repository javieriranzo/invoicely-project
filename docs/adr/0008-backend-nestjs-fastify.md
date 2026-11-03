# ADR-0008: Backend con NestJS sobre Fastify

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
API REST modular con autenticación, permisos verificados en cada petición, validación y
gestión de errores centralizada para 15 módulos de negocio.

## Alternativas estudiadas
- **A. NestJS (adaptador Fastify)**: módulos, inyección de dependencias, guards para permisos, filtros de excepciones, OpenAPI; más código repetitivo y decoradores.
- **B. Fastify solo**: ligero y rápido; estructura y permisos a medida.
- **C. Express 5**: muy conocido; minimalista y más lento.
- **D. Hono**: moderno, cliente tipado; menos maduro para backends empresariales grandes.

## Decisión
**NestJS 12** (12.3.x) con `@nestjs/platform-fastify` (Fastify 5.12.x).

## Motivos
Estructura impuesta y mantenible para un ERP con muchos módulos; los guards encajan con
los permisos por funcionalidad; modelo familiar para el responsable (inspirado en Angular).

## Consecuencias
- NestJS usa decoradores heredados (`experimentalDecorators`, `emitDecoratorMetadata`) y su CLI fija **TypeScript ~6.0**: ver nota en ADR-0004.
- Pendientes de decisión: autenticación/sesiones, validación, logging, documentación OpenAPI.
