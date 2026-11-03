# ADR-0031: Reglas de accesibilidad con `eslint-plugin-jsx-a11y-x`

- **Estado:** Aprobado
- **Fecha:** 2026-11-03
- **Decisor:** Claude Code por delegación del responsable del proyecto

## Contexto y problema
ADR-0021 prevé `eslint-plugin-jsx-a11y` con ESLint 10. Su última versión (6.10.2, octubre de 2024)
solo declara compatibilidad hasta ESLint 9; la compatibilidad con ESLint 10 sigue en una PR abierta
(jsx-eslint/eslint-plugin-jsx-a11y#1081).

## Alternativas estudiadas
- **A. `eslint-plugin-jsx-a11y-x` 0.2.0** (fork de es-tooling, MIT): mismas reglas, declara ESLint `^9 || ^10`, publicado en mayo de 2026.
- **B. `eslint-plugin-jsx-a11y` 6.10.2 ignorando el aviso de dependencias**: funciona en la práctica según otros proyectos, pero sin garantía ni mantenimiento.
- **C. Bajar a ESLint 9**: contradice ADR-0021 por un único plugin.

## Decisión
**A.** `eslint-plugin-jsx-a11y-x` 0.2.0 con la configuración `recommended`, solo en `apps/web`.

## Motivos
Mantiene ESLint 10 y las reglas de accesibilidad con un paquete que declara compatibilidad y está mantenido.

## Consecuencias
- Las reglas se llaman igual (`jsx-a11y/...`). Verificado: 34 reglas activas en los archivos de `apps/web`.
- Si el plugin original publica soporte para ESLint 10, se puede volver a él con un ADR nuevo.
