## MODIFIED Requirements

### Requirement: Gestión de productos
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar productos. Cada producto SHALL tener: nombre (obligatorio), código o referencia (obligatorio y único), descripción, tipo (`producto` o `servicio`), unidad de medida, precio de venta con IVA incluido (obligatorio, mayor o igual que cero), tipo de IVA (obligatorio) y categoría (opcional). Cada producto SHALL tener un único precio de venta; no hay tarifas ni precios por cliente.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra un producto con datos válidos
- **THEN** el producto queda guardado y la operación queda auditada

#### Scenario: Código duplicado
- **WHEN** se intenta guardar un producto con un código que ya usa otro producto
- **THEN** se rechaza indicando que el código ya existe

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica un producto
- **THEN** los cambios se guardan, la operación queda auditada y los pedidos y facturas existentes no cambian

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear, editar, desactivar o eliminar un producto
- **THEN** la API rechaza la operación

## ADDED Requirements

### Requirement: Eliminación y desactivación de productos
Un usuario autorizado SHALL poder eliminar un producto que no aparezca en ningún pedido. Si aparece en algún pedido, SHALL poder desactivarlo, pero no eliminarlo. Un producto desactivado SHALL NOT ofrecerse en pedidos ni facturas nuevos y SHALL poder reactivarse. Los pedidos y facturas SHALL conservar la copia de los datos del producto de cada línea.

#### Scenario: Eliminar un producto sin pedidos
- **WHEN** un usuario autorizado elimina, tras confirmarlo, un producto que no aparece en ningún pedido
- **THEN** el producto se elimina y la operación queda auditada

#### Scenario: Eliminar un producto con pedidos
- **WHEN** se intenta eliminar un producto que aparece en algún pedido
- **THEN** la operación se rechaza indicando que puede desactivarse

#### Scenario: Producto desactivado
- **WHEN** un usuario añade una línea a un pedido o factura nuevos
- **THEN** los productos desactivados no aparecen entre los seleccionables
