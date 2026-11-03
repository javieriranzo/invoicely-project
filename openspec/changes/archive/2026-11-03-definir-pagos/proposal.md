## Why

La spec `payments` dejaba pendientes los pagos parciales y los pagos de varias facturas (cuestión 6).
El responsable lo ha resuelto el 2026-11-03.

## What Changes

- **Pago único**: cada factura emitida se cobra en un solo pago por su total; sin pagos parciales.
- Un pago corresponde a **una sola factura**.
- Datos del pago: fecha, importe (el total de la factura) y **forma de pago** de una lista fija.
- Un pago se puede **anular**; la factura vuelve a `Pendiente`.
- **Sin vencimientos**: el estado de cobro es solo `Pendiente` o `Pagada`.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `payments`: pago único, forma de pago, anulación y estados de cobro.

## Fuera de alcance

- Pagos parciales, cobros de varias facturas, vencimientos, remesas bancarias.
- Cobro o devolución de facturas rectificativas: depende del método de rectificación (cuestión 13).

## Decisiones pendientes

- Cobro de facturas rectificativas (se añade a la cuestión 13).

## Impact

Solo especificaciones y documentación.
