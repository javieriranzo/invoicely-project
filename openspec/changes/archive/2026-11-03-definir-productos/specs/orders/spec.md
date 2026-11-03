## ADDED Requirements

### Requirement: Líneas del pedido
Cada línea de pedido SHALL indicar un producto activo, una cantidad mayor que cero, un precio unitario con IVA incluido y un descuento en porcentaje entre 0 y 100. Al añadir el producto, el precio SHALL tomarse del producto y SHALL poder modificarse en la línea. La línea SHALL conservar una copia del código, nombre, unidad, precio y tipo de IVA, de modo que cambios posteriores del producto no la alteren.

#### Scenario: Precio modificado en la línea
- **WHEN** un usuario cambia el precio de una línea de un pedido en `Borrador`
- **THEN** la línea usa ese precio y el precio del producto no cambia

#### Scenario: Descuento fuera de rango
- **WHEN** se indica un descuento menor que 0 o mayor que 100
- **THEN** se rechaza la línea indicando el rango válido
