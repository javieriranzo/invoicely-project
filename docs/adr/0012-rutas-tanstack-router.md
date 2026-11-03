# ADR-0012: Rutas con TanStack Router

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
La SPA necesita navegación entre módulos, protección de rutas privadas y filtros,
ordenación y paginación de los listados reflejados en la URL.

## Alternativas estudiadas
- **A. TanStack Router 1.x**: tipado completo de rutas y parámetros de búsqueda validables con Zod; orientado a SPA; integración con TanStack Query.
- **B. React Router 8 (modo SPA)**: el más usado y estable; tipado de parámetros más débil en modo SPA y desarrollo centrado en el modo framework.

## Decisión
**TanStack Router** (`@tanstack/react-router` 1.170.x), con el plugin de Vite `@tanstack/router-plugin`
(rutas basadas en archivos; compatible con Vite 8).

## Motivos
Parámetros de URL tipados y validados para decenas de listados filtrables.

## Consecuencias
- Los parámetros de búsqueda de cada listado se definen con esquemas Zod.
- La protección de rutas en el frontend es solo de experiencia de usuario: la seguridad real la aplica el backend (spec `security`).
