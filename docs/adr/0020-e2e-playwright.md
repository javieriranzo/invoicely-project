# ADR-0020: Tests end-to-end con Playwright

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Probar flujos completos en navegador real (login, rutas protegidas, facturación) y el
diseño responsive en ordenador, tablet y móvil.

## Alternativas estudiadas
- **A. Playwright 1.64** (Microsoft, Apache-2.0): Chromium, Firefox y WebKit; emulación de dispositivos; paralelización gratuita; trazas.
- **B. Cypress 16**: buena depuración; WebKit experimental; paralelización avanzada de pago.

## Decisión
**Playwright** (`@playwright/test` 1.64.x).

## Motivos
Cubre la verificación multi-dispositivo exigida sin coste.

## Consecuencias
- Proyectos de Playwright para escritorio, tablet y móvil.
- Skill oficial `playwright-cli` (Microsoft): evaluada; requiere instalar `@playwright/cli`. Se propondrá al crear el esqueleto del proyecto.
