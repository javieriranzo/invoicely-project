## MODIFIED Requirements

### Requirement: Borradores de factura
Una factura SHALL crearse como borrador editable que no tiene número asignado ni efectos fiscales. Un usuario autorizado SHALL poder eliminar un borrador.

#### Scenario: Editar borrador
- **WHEN** un usuario autorizado modifica un borrador
- **THEN** los cambios se guardan sin consumir número de factura

#### Scenario: Eliminar borrador
- **WHEN** un usuario autorizado elimina, tras confirmarlo, una factura en borrador
- **THEN** el borrador se elimina sin afectar a la numeración y la operación queda auditada
