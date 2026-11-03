## ADDED Requirements

### Requirement: Eliminación de pedidos
Un usuario autorizado SHALL poder eliminar un pedido en `Borrador` o `Cancelado`. La eliminación de un pedido en `Confirmado` o `Facturado` SHALL rechazarse. Toda eliminación SHALL quedar auditada.

#### Scenario: Eliminar un pedido cancelado
- **WHEN** un usuario autorizado elimina un pedido `Cancelado`, tras confirmarlo en la interfaz
- **THEN** el pedido se elimina y la operación queda auditada

#### Scenario: Eliminar un pedido confirmado
- **WHEN** se intenta eliminar un pedido `Confirmado` o `Facturado`
- **THEN** la operación se rechaza con un error de conflicto de estado indicando que antes debe cancelarse
