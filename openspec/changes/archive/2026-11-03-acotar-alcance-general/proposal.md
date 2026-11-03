## Why

Faltaba fijar el alcance general (cuestiones 7, 8, 10 y 11 para proveedores). El responsable lo decidió el 2026-11-03.

## What Changes

- **Una sola empresa** emisora por instalación.
- **Sin facturas recibidas** de proveedores: las lleva la gestoría.
- **BREAKING (solo especificación):** se elimina la capacidad `suppliers`. Invoicely App no gestiona proveedores.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `suppliers`: se eliminan todos sus requisitos.
- `company-settings`: una única empresa emisora.

## Fuera de alcance

- Multiempresa, gastos y facturas recibidas, proveedores.

## Decisiones pendientes

- Ninguna.

## Impact

- Especificaciones, plan de desarrollo (se elimina la fase 7), glosario, `CLAUDE.md` y `README.md`. No hay código afectado.
