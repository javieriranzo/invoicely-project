# orders Specification

## Purpose
Define la gestión de pedidos de venta: registro, estados y transiciones. Los pedidos no se enlazan con las facturas ni controlan existencias.

## Requirements

### Requirement: Gestión de pedidos
Los usuarios con el permiso correspondiente SHALL poder registrar, consultar y editar pedidos de venta de un cliente, compuestos por líneas de productos. Invoicely App SHALL gestionar solo pedidos de venta (no pedidos de compra a proveedores). Los pedidos SHALL NOT generar facturas ni enlazarse con ellas, y SHALL NOT controlar existencias de productos.

#### Scenario: Registro de pedido
- **WHEN** un usuario autorizado registra un pedido de un cliente con al menos una línea válida
- **THEN** el pedido queda guardado en estado `Borrador` y la operación queda auditada

#### Scenario: Sin efecto en facturas ni existencias
- **WHEN** un pedido cambia a cualquier estado, incluido `Facturado`
- **THEN** no se crea, modifica ni enlaza ninguna factura y no cambia ninguna cantidad de producto

### Requirement: Listado de pedidos
El listado de pedidos SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Filtrar pedidos
- **WHEN** un usuario aplica un filtro al listado de pedidos
- **THEN** solo se muestran los pedidos que cumplen el filtro

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

### Requirement: Eliminación de pedidos
Un usuario autorizado SHALL poder eliminar un pedido en `Borrador` o `Cancelado`. La eliminación de un pedido en `Confirmado` o `Facturado` SHALL rechazarse. Toda eliminación SHALL quedar auditada.

#### Scenario: Eliminar un pedido cancelado
- **WHEN** un usuario autorizado elimina un pedido `Cancelado`, tras confirmarlo en la interfaz
- **THEN** el pedido se elimina y la operación queda auditada

#### Scenario: Eliminar un pedido confirmado
- **WHEN** se intenta eliminar un pedido `Confirmado` o `Facturado`
- **THEN** la operación se rechaza con un error de conflicto de estado indicando que antes debe cancelarse

### Requirement: Líneas del pedido
Cada línea de pedido SHALL indicar un producto activo, una cantidad mayor que cero, un precio unitario con IVA incluido y un descuento en porcentaje entre 0 y 100. Al añadir el producto, el precio SHALL tomarse del producto y SHALL poder modificarse en la línea. La línea SHALL conservar una copia del código, nombre, unidad, precio y tipo de IVA, de modo que cambios posteriores del producto no la alteren.

#### Scenario: Precio modificado en la línea
- **WHEN** un usuario cambia el precio de una línea de un pedido en `Borrador`
- **THEN** la línea usa ese precio y el precio del producto no cambia

#### Scenario: Descuento fuera de rango
- **WHEN** se indica un descuento menor que 0 o mayor que 100
- **THEN** se rechaza la línea indicando el rango válido
