# invoices Specification

## Purpose
Define la facturación conforme a la normativa española: borradores, emisión con numeración correlativa por serie, contenido obligatorio, inmutabilidad, rectificativas, series, tipos impositivos e importes exactos.

## Requirements

### Requirement: Borradores de factura
Una factura SHALL crearse como borrador editable que no tiene número asignado ni efectos fiscales. Un usuario autorizado SHALL poder eliminar un borrador.

#### Scenario: Editar borrador
- **WHEN** un usuario autorizado modifica un borrador
- **THEN** los cambios se guardan sin consumir número de factura

#### Scenario: Eliminar borrador
- **WHEN** un usuario autorizado elimina, tras confirmarlo, una factura en borrador
- **THEN** el borrador se elimina sin afectar a la numeración y la operación queda auditada

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
El sistema SHALL permitir gestionar series de facturación, con al menos una serie ordinaria de facturas completas, una serie de facturas simplificadas y una serie específica de rectificativas.

#### Scenario: Serie de rectificativas obligatoria
- **WHEN** se emite una factura rectificativa
- **THEN** se numera en una serie distinta de la de las facturas ordinarias

#### Scenario: Serie de simplificadas
- **WHEN** se emite una factura simplificada
- **THEN** se numera en la serie de simplificadas, distinta de la de las facturas completas

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

### Requirement: Factura completa y factura simplificada
El sistema SHALL permitir emitir facturas completas (RD 1619/2012, art. 6) y facturas simplificadas (art. 7). La factura simplificada SHALL poder emitirse sin cliente registrado y SHALL numerarse en una serie distinta de la de las facturas completas (art. 6.1.a). El importe máximo de la factura simplificada SHALL ser configurable, con 400 € IVA incluido por defecto (art. 4.1).

#### Scenario: Venta a un particular sin datos
- **WHEN** un usuario autorizado emite una factura simplificada sin cliente por un importe dentro del límite
- **THEN** la factura se emite en la serie de simplificadas con el contenido del artículo 7

#### Scenario: Límite superado
- **WHEN** se intenta emitir una factura simplificada cuyo total supera el límite configurado
- **THEN** la emisión se rechaza indicando que debe emitirse una factura completa

#### Scenario: Series separadas
- **WHEN** se emiten en el mismo año facturas completas y simplificadas
- **THEN** cada tipo se numera en su propia serie

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
