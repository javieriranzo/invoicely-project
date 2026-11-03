## MODIFIED Requirements

### Requirement: Gestión de pedidos
Los usuarios con el permiso correspondiente SHALL poder registrar, consultar y editar pedidos de venta de un cliente, compuestos por líneas de productos. Invoicely App SHALL gestionar solo pedidos de venta (no pedidos de compra a proveedores). Los pedidos SHALL NOT generar facturas ni enlazarse con ellas, y SHALL NOT controlar existencias de productos.

#### Scenario: Registro de pedido
- **WHEN** un usuario autorizado registra un pedido de un cliente con al menos una línea válida
- **THEN** el pedido queda guardado en estado `Borrador` y la operación queda auditada

#### Scenario: Sin efecto en facturas ni existencias
- **WHEN** un pedido cambia a cualquier estado, incluido `Facturado`
- **THEN** no se crea, modifica ni enlaza ninguna factura y no cambia ninguna cantidad de producto

## ADDED Requirements

### Requirement: Estados del pedido
Un pedido SHALL estar en uno de estos estados: `Borrador`, `Confirmado`, `Facturado` o `Cancelado`. Solo SHALL permitirse estas transiciones, cada una de ellas auditada:
- `Borrador` → `Confirmado`
- `Confirmado` → `Facturado` (lo marca manualmente el usuario cuando ha hecho la factura)
- `Borrador` → `Cancelado`
- `Confirmado` → `Cancelado`
- `Confirmado` → `Borrador` (para corregirlo)
- `Facturado` → `Confirmado` (deshacer un marcado erróneo)

`Cancelado` SHALL ser un estado final.

#### Scenario: Avance normal
- **WHEN** un usuario autorizado confirma un pedido en `Borrador` y después lo marca como facturado
- **THEN** el pedido pasa a `Confirmado` y luego a `Facturado`, y ambas transiciones quedan auditadas

#### Scenario: Deshacer Facturado
- **WHEN** un usuario autorizado deshace el estado de un pedido `Facturado`
- **THEN** el pedido vuelve a `Confirmado`

#### Scenario: Transición no permitida
- **WHEN** se solicita cancelar un pedido `Facturado` o cambiar el estado de un pedido `Cancelado`
- **THEN** la operación se rechaza con un error de conflicto de estado y el pedido no cambia

### Requirement: Edición solo en borrador
El contenido de un pedido (cliente, líneas, cantidades y precios) SHALL poder modificarse solo mientras está en `Borrador`.

#### Scenario: Editar un pedido confirmado
- **WHEN** se intenta modificar un pedido en `Confirmado`, `Facturado` o `Cancelado`
- **THEN** la operación se rechaza con un error de conflicto de estado y se indica que debe volver a `Borrador` para corregirlo (si su estado lo permite)
