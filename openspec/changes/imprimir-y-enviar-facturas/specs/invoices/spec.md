## ADDED Requirements

### Requirement: Documento imprimible de la factura
El sistema SHALL generar para cada factura emitida un documento PDF imprimible, con la identidad de Invoicely App y la empresa, que refleje fielmente el contenido de la factura emitida.

#### Scenario: Descargar e imprimir
- **WHEN** un usuario autorizado solicita el documento de una factura emitida
- **THEN** obtiene un PDF que puede imprimir, con los mismos datos, número y serie que la factura emitida

#### Scenario: Borrador no imprimible como factura
- **WHEN** se solicita el documento de un borrador
- **THEN** el sistema no genera un documento que pueda confundirse con una factura emitida

### Requirement: Envío de facturas por correo electrónico
El sistema SHALL permitir enviar por correo electrónico el PDF de facturas emitidas a la gestoría de la empresa. Los destinatarios adicionales y el envío en lote están pendientes de decisión.

#### Scenario: Envío a la gestoría
- **WHEN** un usuario autorizado envía una factura emitida a la gestoría
- **THEN** se envía un correo con el PDF adjunto a la dirección configurada y el envío queda auditado

#### Scenario: Fallo de envío
- **WHEN** el servidor de correo rechaza o no recibe el envío
- **THEN** se informa al usuario del error y la factura permanece sin cambios
