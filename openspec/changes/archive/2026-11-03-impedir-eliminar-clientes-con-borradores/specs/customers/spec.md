## MODIFIED Requirements

### Requirement: Eliminación de clientes
Un usuario autorizado SHALL poder eliminar un cliente que no tenga pedidos ni facturas en borrador. Si el cliente tiene pedidos en cualquier estado o facturas en borrador, la eliminación SHALL rechazarse. Las facturas emitidas del cliente SHALL conservar íntegros los datos del cliente copiados al emitirlas.

#### Scenario: Eliminar un cliente con facturas emitidas
- **WHEN** un usuario autorizado elimina un cliente sin pedidos ni borradores que tiene facturas emitidas
- **THEN** el cliente se elimina, sus facturas siguen mostrando los datos del cliente con los que se emitieron y la operación queda auditada

#### Scenario: Eliminar un cliente con pedidos
- **WHEN** se intenta eliminar un cliente que tiene algún pedido
- **THEN** la operación se rechaza indicando que antes hay que eliminar sus pedidos

#### Scenario: Eliminar un cliente con facturas en borrador
- **WHEN** se intenta eliminar un cliente que tiene alguna factura en borrador
- **THEN** la operación se rechaza indicando que antes hay que emitir o eliminar sus borradores

#### Scenario: Confirmación
- **WHEN** un usuario solicita eliminar un cliente desde la interfaz
- **THEN** se le pide confirmación porque la acción es irreversible
