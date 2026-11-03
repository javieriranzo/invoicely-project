## Why

Cuestión 28: faltaba decidir qué ocurre con las facturas en borrador de un cliente que se elimina.
El responsable decidió el 2026-11-03 impedir la eliminación, como con los pedidos.

## What Changes

- No se puede eliminar un cliente con facturas en borrador; hay que emitirlas o eliminarlas antes.
- Se hace explícito que una factura en borrador se puede eliminar (ya lo indicaba la skill `invoicing-management`).

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `customers`: eliminación de clientes.
- `invoices`: borradores de factura.

## Fuera de alcance

- Cambios en las facturas emitidas (siguen sin poder eliminarse).

## Decisiones pendientes

- Ninguna.

## Impact

Solo especificaciones.
