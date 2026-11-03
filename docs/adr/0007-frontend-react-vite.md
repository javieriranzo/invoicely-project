# ADR-0007: Frontend con React y Vite

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
SPA de tipo ERP con muchos formularios, tablas y una interfaz SaaS cuidada.

## Alternativas estudiadas
- **A. React + Vite**: ecosistema más amplio (shadcn/ui, TanStack, React Hook Form); requiere componer librerías.
- **B. Angular**: todo integrado y estructurado; experiencia previa del responsable; menos opciones de componentes con estilo SaaS moderno.
- **C. Vue + Vite**: curva suave; ecosistema empresarial menor.

## Decisión
**React 19** (19.3.x a 2026-11-02) con **Vite 8** (8.3.x) y `@vitejs/plugin-react` 6, en modo SPA.

## Motivos
Mayor soporte para tablas y formularios complejos y encaje con las herramientas aprobadas
(plugin `frontend-design`; skills oficiales de shadcn y Vercel, pendientes de evaluar).

## Consecuencias
- Pendientes de decisión: librería de componentes y estilos, router, gestión de datos remotos y caché, formularios, validación.
- Vite 8 requiere Node ≥ 22.12 (cumplido con Node 26).
