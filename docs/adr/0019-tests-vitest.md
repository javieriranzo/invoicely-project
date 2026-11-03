# ADR-0019: Tests unitarios y de integración con Vitest

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Tests rápidos de lógica de negocio, componentes React y API en un monorepo TypeScript.

## Alternativas estudiadas
- **A. Vitest 5 en todo el monorepo**: una herramienta; integrada con Vite; soporta Node 26.
- **B. Jest 30** (defecto de NestJS): los paquetes de NestJS 12 son solo ESM y Jest sigue dando problemas con ESM; obligaría a usar dos herramientas.

## Decisión
**Vitest 5.1.x** (+ `@vitest/coverage-v8`) en frontend, backend y paquetes compartidos.
- Backend: ~~`unplugin-swc` + `@swc/core`~~ (innecesario, ver ADR-0032). `@nestjs/testing` para el módulo de pruebas.
- Tests de API: `app.inject()` de Fastify (incluido); **no** se usa supertest.
- Frontend: `@testing-library/react` 16.x.

## Motivos
Una sola herramienta compatible con ESM y con el stack aprobado.

## Consecuencias
- La base de datos real en tests de integración depende de la decisión de contenedores (ronda de infraestructura).
- Simulación de la API en tests de frontend (p. ej. MSW): se propondrá si hace falta.
