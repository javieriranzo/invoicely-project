# ADR-0014: Formularios con React Hook Form

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Formularios complejos (facturas con líneas dinámicas, clientes, productos) validados con los esquemas Zod compartidos (ADR-0010).

## Alternativas estudiadas
- **A. React Hook Form 7 + @hookform/resolvers**: el más maduro; base del componente `Form` de shadcn/ui; soporte de Zod 4.
- **B. TanStack Form 1**: tipado excelente; menos integración con shadcn/ui.

## Decisión
**React Hook Form** 7.91.x con **@hookform/resolvers** 7.x (resolver de Zod).

## Motivos
Integración directa con shadcn/ui (ADR-0011) y Zod (ADR-0010).

## Consecuencias
- Los mismos esquemas Zod validan el formulario en cliente y la petición en la API.
