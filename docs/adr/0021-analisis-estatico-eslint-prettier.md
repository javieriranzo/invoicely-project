# ADR-0021: Análisis estático con ESLint + typescript-eslint y formato con Prettier

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Detectar errores antes de ejecutar y mantener un estilo uniforme verificado en CI.

## Alternativas estudiadas
- **A. ESLint 10 + typescript-eslint (reglas con tipos) + Prettier**: reglas como `no-floating-promises`; plugins de React hooks, TanStack Query y accesibilidad; más lento.
- **B. Biome 2**: una herramienta muy rápida; menos reglas con tipos y plugins.
- **C. oxlint + Prettier**: muy rápido; reglas con tipos menos maduras.

## Decisión
**ESLint 10** con **typescript-eslint 8.x** (configuración con información de tipos y modo estricto),
**Prettier 3**. Plugins previstos: `eslint-plugin-react-hooks`, `@tanstack/eslint-plugin-query`,
`eslint-plugin-jsx-a11y` (sustituido por el fork `eslint-plugin-jsx-a11y-x`, ADR-0031). Además, `tsc --noEmit` en modo estricto en CI.

## Motivos
Las reglas con tipos detectan errores graves (promesas sin esperar en operaciones de base de datos).

## Consecuencias
- typescript-eslint 8.72 admite TypeScript `<6.1`: compatible con TypeScript 6.0 (ADR-0004). Cualquier subida de TypeScript debe comprobar esta compatibilidad.
