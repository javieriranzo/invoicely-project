# ADR-0034: Comprobación automática de accesibilidad con axe en los tests E2E

- **Estado:** Aprobado
- **Fecha:** 2026-11-03
- **Decisor:** Claude Code por delegación del responsable del proyecto

## Contexto y problema
La spec `architecture` exige WCAG 2.2 AA. Hace falta comprobarlo de forma automática en cada cambio.

## Alternativas estudiadas
- **A. `@axe-core/playwright` 4.14** (Deque, MPL-2.0): integrado con los tests de Playwright existentes, en navegador real.
- **B. `vitest-axe` / `jest-axe`** en tests de componentes: jsdom no calcula estilos, así que no detecta problemas de contraste.
- **C. Lighthouse CI**: más pesado y orientado a rendimiento.

## Decisión
**A.** `@axe-core/playwright` 4.14.0 en `e2e/`, con las etiquetas `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` y `wcag22aa`.

## Motivos
Comprueba contraste y ARIA en el navegador real y en los tres tamaños de pantalla.

## Consecuencias
- Cada pantalla nueva añade un test E2E con axe sin infracciones.
- axe no cubre todo WCAG: la navegación con teclado y los lectores de pantalla requieren tests específicos y revisión manual.
- Licencia MPL-2.0: se usa sin modificar como herramienta de desarrollo; no se distribuye con la aplicación.
