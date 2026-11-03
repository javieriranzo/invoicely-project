## ADDED Requirements

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

## MODIFIED Requirements

### Requirement: Series de facturación
El sistema SHALL permitir gestionar series de facturación, con al menos una serie ordinaria de facturas completas, una serie de facturas simplificadas y una serie específica de rectificativas.

#### Scenario: Serie de rectificativas obligatoria
- **WHEN** se emite una factura rectificativa
- **THEN** se numera en una serie distinta de la de las facturas ordinarias

#### Scenario: Serie de simplificadas
- **WHEN** se emite una factura simplificada
- **THEN** se numera en la serie de simplificadas, distinta de la de las facturas completas
