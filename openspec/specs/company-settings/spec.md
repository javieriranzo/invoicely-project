# company-settings Specification

## Purpose
Define la configuración de los datos de la empresa emisora y la configuración general.

## Requirements

### Requirement: Datos de la empresa emisora
Los usuarios con el permiso correspondiente SHALL poder configurar los datos de la empresa que exige una factura para el emisor (nombre o razón social, NIF y domicilio; RD 1619/2012, art. 6).

#### Scenario: Emisión sin datos de empresa
- **WHEN** se intenta emitir una factura sin los datos obligatorios de la empresa configurados
- **THEN** la emisión se rechaza indicando que falta completar la configuración

#### Scenario: Cambio de datos de empresa
- **WHEN** se modifican los datos de la empresa
- **THEN** las facturas ya emitidas conservan los datos vigentes en su emisión y el cambio queda auditado
