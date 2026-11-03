# payments Specification

## Purpose
Define el registro de pagos de facturas emitidas y el estado de cobro derivado.

## Requirements

### Requirement: Registro de pagos
Los usuarios con el permiso correspondiente SHALL poder registrar pagos asociados a facturas emitidas. Los pagos parciales y los pagos de varias facturas están pendientes de decisión.

#### Scenario: Registrar pago
- **WHEN** un usuario autorizado registra un pago de una factura emitida
- **THEN** el pago queda guardado, la operación queda auditada y el estado de cobro de la factura se actualiza

#### Scenario: Pago de un borrador
- **WHEN** se intenta registrar un pago de una factura en borrador
- **THEN** la operación se rechaza

### Requirement: Estado de cobro derivado
El estado de cobro de una factura SHALL derivarse de los pagos registrados, sin modificar el contenido fiscal de la factura.

#### Scenario: Factura totalmente pagada
- **WHEN** la suma de pagos alcanza el total de la factura
- **THEN** la factura figura como pagada
