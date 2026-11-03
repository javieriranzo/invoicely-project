# invoices Specification

## Purpose
Define la facturación conforme a la normativa española: borradores, emisión con numeración correlativa por serie, contenido obligatorio, inmutabilidad, rectificativas, series, tipos impositivos e importes exactos.

## Requirements

### Requirement: Borradores de factura
Una factura SHALL crearse como borrador editable que no tiene número asignado ni efectos fiscales.

#### Scenario: Editar borrador
- **WHEN** un usuario autorizado modifica un borrador
- **THEN** los cambios se guardan sin consumir número de factura

### Requirement: Emisión con numeración correlativa por serie
Al emitir una factura, el sistema MUST asignarle el siguiente número correlativo de su serie, sin huecos ni duplicados, incluso con emisiones simultáneas (RD 1619/2012, art. 6.1.a).

#### Scenario: Emisión
- **WHEN** un usuario autorizado emite un borrador válido tras confirmarlo
- **THEN** la factura recibe el siguiente número de su serie, pasa a estado emitida y la operación queda auditada

#### Scenario: Emisiones simultáneas
- **WHEN** dos facturas de la misma serie se emiten a la vez
- **THEN** reciben números distintos y consecutivos

### Requirement: Contenido obligatorio
Una factura completa MUST incluir el contenido exigido por el artículo 6 del RD 1619/2012 y el sistema MUST impedir su emisión si falta algún dato obligatorio.

#### Scenario: Datos obligatorios incompletos
- **WHEN** se intenta emitir una factura sin un dato obligatorio
- **THEN** la emisión se rechaza indicando el dato que falta

### Requirement: Inmutabilidad de las facturas emitidas
Una factura emitida MUST NOT modificarse ni eliminarse; su corrección solo puede hacerse mediante factura rectificativa.

#### Scenario: Intento de modificar una factura emitida
- **WHEN** se intenta modificar o eliminar una factura emitida, por la interfaz o directamente por la API
- **THEN** la operación se rechaza y la factura permanece sin cambios

### Requirement: Facturas rectificativas
El sistema SHALL permitir emitir facturas rectificativas en una serie específica, identificando la factura rectificada y expresando la rectificación de base imponible, tipo y cuota (RD 1619/2012, art. 15). El método de rectificación está pendiente de decisión.

#### Scenario: Rectificar una factura
- **WHEN** un usuario autorizado rectifica una factura emitida
- **THEN** se emite una nueva factura en la serie de rectificativas que referencia a la original, y la original queda marcada como rectificada sin modificar su contenido

#### Scenario: Plazo superado
- **WHEN** se intenta rectificar una factura cuyo impuesto se devengó hace más de cuatro años
- **THEN** el sistema lo impide o advierte según la regla que se apruebe

### Requirement: Series de facturación
El sistema SHALL permitir gestionar series de facturación, con al menos una serie ordinaria y una serie específica de rectificativas.

#### Scenario: Serie de rectificativas obligatoria
- **WHEN** se emite una factura rectificativa
- **THEN** se numera en una serie distinta de la de las facturas ordinarias

### Requirement: Tipos impositivos configurables
Los tipos impositivos SHALL ser datos configurables con periodo de vigencia, no valores fijos en el código, y la factura emitida MUST conservar el tipo aplicado en el momento de la emisión.

#### Scenario: Cambio de tipo impositivo
- **WHEN** cambia un tipo impositivo después de emitir una factura
- **THEN** la factura emitida conserva el tipo y la cuota originales

### Requirement: Importes exactos
Los importes MUST calcularse con aritmética decimal exacta y una regla de redondeo documentada.

#### Scenario: Suma de líneas
- **WHEN** se calculan los totales de una factura con varias líneas
- **THEN** el resultado no presenta errores de redondeo de coma flotante
