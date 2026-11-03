# ADR-0024: Integración continua con GitHub Actions

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Verificar en cada cambio formato, lint, tipos, tests unitarios, de integración y E2E, y migraciones.

## Alternativas estudiadas
- **A. GitHub Actions**: el repositorio ya está en GitHub; Docker y Playwright disponibles.
- **B. GitLab CI**: obliga a migrar el repositorio.
- **C. CI propio (Woodpecker, Jenkins)**: más mantenimiento sin beneficio.

## Decisión
**GitHub Actions**, de momento solo para CI. El despliegue continuo (CD) se decidirá con el hosting.

## Consecuencias
- Las acciones de terceros se fijan por SHA de commit, con permisos mínimos (`permissions:`).
- El repositorio es **público** a 2026-11-02: la visibilidad está pendiente de decisión del responsable.
