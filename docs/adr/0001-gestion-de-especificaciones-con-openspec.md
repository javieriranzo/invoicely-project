# ADR-0001: Gestión de especificaciones con OpenSpec

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
El proyecto necesita una fuente de verdad para requisitos, propuestas de cambio, tareas y
su historial, integrada con Claude Code y con aprobación explícita antes de implementar.

## Alternativas estudiadas
- **OpenSpec 1.16.0** (Fission-AI, MIT): flujo propuesta → especificación → tareas → verificación → archivo, con integración oficial para Claude Code.
- Documentación libre en `docs/` sin flujo: sin trazabilidad de cambios ni validación.

## Decisión
OpenSpec 1.16.0, instalado globalmente con npm, inicializado con `openspec init --tools claude`.
- Perfil `custom`: flujos `propose, explore, apply, update, sync, archive, verify` (core + verify).
- Telemetría desactivada (`openspec config set telemetry.enabled false`).
- Contexto y reglas del proyecto en `openspec/config.yaml` (idioma, aprobación, verificación).

## Motivos
Elegido por el responsable del proyecto; `verify` refuerza la regla de no archivar cambios sin verificación.

## Consecuencias
- Toda funcionalidad pasa por un cambio en `openspec/changes/` y se archiva tras verificarse.
- La configuración global (perfil, telemetría) vive en la máquina del desarrollador; otro equipo debe replicarla (documentado en la guía de instalación).
- Pendiente: fijar OpenSpec como dependencia de desarrollo del repositorio cuando exista `package.json`.
