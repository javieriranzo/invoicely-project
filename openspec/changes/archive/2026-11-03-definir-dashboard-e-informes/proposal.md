## Why

La spec `reports` dejaba pendientes los indicadores del dashboard y los informes (cuestión 24).
El responsable los ha decidido el 2026-11-03.

## What Changes

- Dashboard con: facturación del mes y del año (con y sin IVA) comparada con el mismo periodo del año anterior; pedidos en `Borrador` y `Confirmado`; gráfico de facturación de los últimos 12 meses; últimas facturas emitidas; facturas pendientes de cobro.
- Informe de facturas emitidas por periodo, con desglose de base y cuota por tipo de IVA y total, exportable a CSV, Excel y PDF.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `reports`: indicadores del dashboard, informe de facturas por periodo y exportación.

## Fuera de alcance

- Mejores clientes, productos más vendidos, ventas por cliente o producto, cobros por forma de pago.

## Decisiones pendientes

- Las facturas rectificativas **restan** en la facturación del periodo (propuesta técnica coherente con su efecto fiscal); se revisará al decidir el método de rectificación (cuestión 13).

## Impact

Solo especificaciones y documentación. Implementación en la fase 11.
