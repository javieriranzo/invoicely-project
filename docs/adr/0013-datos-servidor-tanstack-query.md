# ADR-0013: Datos del servidor con TanStack Query, sin librería de estado global

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Peticiones a la API con estados de carga/error, caché, reintentos e invalidación tras modificaciones.

## Alternativas estudiadas
- **A. TanStack Query 5**: estándar de facto; caché, invalidación, paginación, actualizaciones optimistas.
- **B. SWR**: más simple; más limitado en mutaciones e invalidación.
- **C. Solo loaders del router**: sin dependencia; caché e invalidación manuales.

## Decisión
**TanStack Query** (`@tanstack/react-query` 5.105.x). **No** se adopta librería de estado global
(Redux, Zustand…): estado del servidor en Query; estado de interfaz en React y en la URL.

## Motivos
Las mutaciones e invalidaciones son constantes en un ERP; Query lo resuelve de forma madura.

## Consecuencias
- Incorporar una librería de estado global en el futuro requerirá propuesta y aprobación.
