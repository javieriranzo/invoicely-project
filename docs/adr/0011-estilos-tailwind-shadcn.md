# ADR-0011: Estilos con Tailwind CSS y componentes shadcn/ui

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Interfaz SaaS profesional y coherente, con identidad propia (evitar interfaces genéricas),
tablas, formularios, diálogos, notificaciones y menú lateral.

## Alternativas estudiadas
- **A. Tailwind CSS 4 + shadcn/ui**: componentes copiados al proyecto como código propio; control visual total; skill oficial.
- **B. Mantine 9**: muy completa; estética reconocible y menos personalizable.
- **C. MUI 9 / Ant Design 6**: completas pero pesadas y con estética muy marcada.

## Decisión
**Tailwind CSS 4** (4.3.x, integrado con `@tailwindcss/vite`, compatible con Vite 8) y **shadcn/ui**
(CLI `shadcn` 4.x) en la SPA.

## Motivos
Máximo control para un sistema de diseño propio; encaje con `frontend-design`, TanStack Table y React Hook Form.

## Consecuencias
- Los componentes generados pasan a ser código del proyecto y se mantienen como tal.
- El sistema de diseño (paleta, tipografía, espaciados, iconografía) se presentará para aprobación en la fase de diseño.
- Skill oficial `shadcn`: pendiente de decisión sobre su incorporación.
