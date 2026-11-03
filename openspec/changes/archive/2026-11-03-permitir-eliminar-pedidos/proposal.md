## Why

Un cliente con pedidos no puede eliminarse (spec `customers`), pero la spec `orders` no permitía eliminar
pedidos. El responsable decidió el 2026-11-03 que los pedidos en `Borrador` o `Cancelado` se pueden eliminar.

## What Changes

- Se pueden eliminar pedidos en `Borrador` o `Cancelado`; en `Confirmado` o `Facturado`, no.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `orders`: eliminación de pedidos.

## Fuera de alcance

- Eliminación en bloque de los pedidos de un cliente.

## Decisiones pendientes

- Ninguna.

## Impact

Solo especificaciones.
