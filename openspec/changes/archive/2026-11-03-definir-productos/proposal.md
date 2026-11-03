## Why

Las specs `products` y `product-categories` dejaban pendientes los campos, precios, descuentos y la
eliminación (cuestiones 9, 10 y 11). El responsable los ha resuelto el 2026-11-03.

## What Changes

- Producto: nombre, código/referencia único, descripción, tipo (producto o servicio), unidad de medida, precio de venta **con IVA incluido**, tipo de IVA y categoría opcional.
- **Precio único** por producto, modificable a mano en cada línea de pedido o factura.
- **Descuento en porcentaje por línea**; sin descuento global ni tarifas.
- Producto: se elimina si no aparece en ningún pedido; si aparece, solo se desactiva.
- Categorías de **un nivel**; se eliminan solo si no tienen productos.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `products`: campos, precio, eliminación y desactivación.
- `product-categories`: un nivel y eliminación.
- `orders`: líneas con precio del producto editable y descuento.
- `invoices`: líneas con precio editable, descuento y precios con IVA incluido.

## Fuera de alcance

- Tarifas, precios por cliente, descuento global, stock.

## Decisiones pendientes

- **Redondeo con precios con IVA incluido** (por línea o por total, y tratamiento de los céntimos): se decidirá
  en el diseño de facturación a partir del RD 1619/2012 y se contrastará con la gestoría (nueva cuestión 29).

## Impact

Solo especificaciones y documentación.
