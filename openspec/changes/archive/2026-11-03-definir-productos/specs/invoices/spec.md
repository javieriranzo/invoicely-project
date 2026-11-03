## ADDED Requirements

### Requirement: Líneas de factura
Cada línea de factura SHALL indicar una descripción, una cantidad, un precio unitario con IVA incluido, un descuento en porcentaje entre 0 y 100 y un tipo de IVA. La línea SHALL poder partir de un producto activo, cuyo precio SHALL poder modificarse en la línea.

#### Scenario: Cambios posteriores del producto
- **WHEN** se modifica el precio de un producto que aparece en una factura emitida
- **THEN** la factura emitida no cambia

### Requirement: Desglose a partir de precios con IVA incluido
La factura SHALL mostrar, por cada tipo de IVA, la base imponible y la cuota calculadas a partir de los precios con IVA incluido (RD 1619/2012, arts. 6.1 y 7.1). El método de redondeo SHALL documentarse en el diseño de la fase de facturación antes de implementarlo.

#### Scenario: Base y cuota a partir del precio final
- **WHEN** se emite una factura con líneas de precio con IVA incluido
- **THEN** la factura muestra, por cada tipo de IVA, la base imponible y la cuota, y su suma coincide con el total
