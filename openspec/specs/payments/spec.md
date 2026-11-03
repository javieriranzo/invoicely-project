# payments Specification

## Purpose
Define el registro de pagos de facturas emitidas y el estado de cobro derivado.

## Requirements

### Requirement: Registro de pagos
Los usuarios con el permiso correspondiente SHALL poder registrar el pago de una factura emitida pendiente de cobro. Cada factura SHALL cobrarse en un único pago por su importe total, y cada pago SHALL corresponder a una sola factura. El pago SHALL registrar la fecha, el importe y la forma de pago, que SHALL ser una de: efectivo, tarjeta, transferencia, Bizum o domiciliación bancaria.

#### Scenario: Registrar pago
- **WHEN** un usuario autorizado registra el pago de una factura emitida pendiente, indicando fecha y forma de pago
- **THEN** el pago queda guardado por el total de la factura, la operación queda auditada y la factura figura como pagada

#### Scenario: Pago de un borrador
- **WHEN** se intenta registrar un pago de una factura en borrador
- **THEN** la operación se rechaza

#### Scenario: Factura ya pagada
- **WHEN** se intenta registrar un pago de una factura que ya figura como pagada
- **THEN** la operación se rechaza con un error de conflicto de estado

### Requirement: Estado de cobro derivado
El estado de cobro de una factura emitida SHALL ser `Pendiente` o `Pagada`, derivado de si tiene un pago vigente, sin modificar el contenido fiscal de la factura. No hay control de vencimientos.

#### Scenario: Factura totalmente pagada
- **WHEN** una factura emitida tiene un pago vigente
- **THEN** figura como pagada

#### Scenario: Factura pendiente
- **WHEN** una factura emitida no tiene ningún pago vigente
- **THEN** figura como pendiente

### Requirement: Anulación de pagos
Un usuario autorizado SHALL poder anular un pago registrado por error. El pago anulado SHALL conservarse marcado como anulado (no se borra), la anulación SHALL quedar auditada y la factura SHALL volver a `Pendiente`.

#### Scenario: Anular un pago
- **WHEN** un usuario autorizado anula, tras confirmarlo, el pago de una factura
- **THEN** el pago queda anulado, la factura vuelve a figurar como pendiente y la operación queda auditada
