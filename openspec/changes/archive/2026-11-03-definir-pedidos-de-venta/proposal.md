## Why

La spec `orders` dejaba pendientes el tipo de pedido, sus estados, su relación con las facturas y
el control de stock (cuestiones abiertas 1–4). El responsable las ha resuelto el 2026-11-03.

## What Changes

- Los pedidos son **solo de venta** (de clientes a la empresa). No hay pedidos de compra a proveedores.
- **Sin relación** entre pedidos y facturas: las facturas se crean de forma independiente y el pedido no genera ni enlaza facturas.
- Estados: `Borrador`, `Confirmado`, `Facturado` (marcado manualmente) y `Cancelado`, con las transiciones acordadas.
- El pedido solo se modifica en `Borrador`.
- **Sin control de stock**: los productos son un catálogo, sin existencias.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `orders`: tipo de pedido, estados, transiciones y edición.

## Fuera de alcance

- Pedidos de compra, inventario y almacenes.
- Generar facturas a partir de pedidos o enlazarlos con facturas.
- Qué roles pueden ejecutar cada transición: se decide con los permisos (cuestión 16, fase 4).
- Numeración de pedidos y campos concretos del pedido: se decidirán en el diseño de base de datos (fase 3) y la cuestión 10.

## Decisiones pendientes

- Ninguna nueva. Los permisos por rol siguen en la cuestión 16.

## Impact

- Solo especificaciones y documentación; no hay código afectado (el módulo de pedidos es la fase 8).
