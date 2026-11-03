# ADR-0006: Monorepo con workspaces de pnpm

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
ADR-0003 establece un monorepo con frontend, backend y paquetes compartidos. Hace falta
una herramienta que gestione dependencias y enlaces entre paquetes.

## Alternativas estudiadas
- **A. pnpm workspaces**: rápido, estricto con dependencias no declaradas, sin herramientas adicionales.
- **B. npm workspaces**: sin instalación extra; más lento y permisivo.
- **C. pnpm + Turborepo/Nx**: caché y orquestación de tareas; complejidad innecesaria hoy.

## Decisión
**pnpm workspaces**, pnpm **12.16.1** (instalado globalmente bajo Node 26 con npm; Node 26 ya no
incluye corepack). Se fijará en el campo `packageManager` del `package.json` raíz.

## Motivos
Mínima complejidad con dependencias estrictas. Turborepo puede añadirse después sin reestructurar.

## Consecuencias
- Estructura prevista: `apps/web` (SPA), `apps/api` (API), `packages/*` (código compartido). Se concretará al crear el esqueleto.
- Cada desarrollador necesita pnpm 12 instalado bajo Node 26 (documentado en la guía de instalación).
