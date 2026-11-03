## Why

La spec `customers` dejaba pendientes el tipo de cliente, los campos y la eliminación (cuestiones 5, 10 y 11),
y la spec `invoices` no contemplaba la factura simplificada. El responsable los ha resuelto el 2026-11-03.

## What Changes

- La empresa vende **sobre todo a particulares**, también a empresas, en España, la UE y el resto del mundo.
- Se emiten **facturas completas y simplificadas** (sin datos del cliente), en series separadas (RD 1619/2012, arts. 4, 6.1.a y 7).
- Ficha del cliente: nombre o razón social, tipo y número de identificación fiscal, país, domicilio y **datos de contacto** (persona, correo, teléfono).
- Un cliente **se puede eliminar** aunque tenga facturas, que conservan su copia de los datos; **no** si tiene pedidos.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `customers`: campos, identificación fiscal extranjera y eliminación.
- `invoices`: tipos de factura (completa y simplificada) y serie de simplificadas.

## Fuera de alcance

- Reglas de IVA de las operaciones intracomunitarias y exportaciones (cuestión 12, gestoría).
- Sustitución de una factura simplificada por una completa a petición del cliente: se tratará con las rectificativas (cuestión 13).
- Nombre comercial, condiciones de pago, notas y dirección de entrega: no se piden.

## Decisiones pendientes

- **Límite de la factura simplificada** (400 € o 3.000 € según el sector, art. 4.1): lo confirma la gestoría; mientras tanto, 400 €.
- **Facturas en borrador de un cliente que se elimina**: no acordado (nueva cuestión 28).
- Validación de identificaciones extranjeras: solo se comprueba el formato del NIF español y del NIF-IVA de la UE (decisión técnica).

## Impact

Solo especificaciones y documentación.
