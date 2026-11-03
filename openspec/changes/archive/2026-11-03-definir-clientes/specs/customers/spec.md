## MODIFIED Requirements

### Requirement: Gestión de clientes
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar, editar y eliminar clientes, que pueden ser particulares o empresas de España, de la Unión Europea o del resto del mundo. La ficha del cliente SHALL incluir: nombre o razón social (obligatorio), tipo y número de identificación fiscal, país, domicilio, persona de contacto, correo electrónico y teléfono.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra un cliente con datos válidos
- **THEN** el cliente queda guardado y la operación queda auditada

#### Scenario: Alta de un particular con datos mínimos
- **WHEN** un usuario autorizado registra un cliente indicando solo el nombre
- **THEN** el cliente queda guardado; los datos fiscales se exigirán al emitirle una factura completa

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica un cliente
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear, editar o eliminar un cliente
- **THEN** la API rechaza la operación

### Requirement: Datos fiscales del cliente
El cliente SHALL poder registrar los datos que exige una factura completa para el destinatario (nombre o razón social, número de identificación fiscal y domicilio; RD 1619/2012, art. 6). El tipo de identificación SHALL ser uno de: NIF español (incluye DNI, NIE y CIF), NIF-IVA de otro Estado de la UE o identificación fiscal de otro país. El sistema SHALL validar el formato del NIF español y del NIF-IVA de la UE.

#### Scenario: Cliente sin datos fiscales completos
- **WHEN** se intenta emitir una factura completa a un cliente sin los datos fiscales obligatorios
- **THEN** la emisión se rechaza indicando los datos que faltan

#### Scenario: NIF español con formato no válido
- **WHEN** se guarda un cliente con un NIF español cuyo formato o letra de control no es válido
- **THEN** se rechaza indicando que el NIF no es válido

#### Scenario: Cliente de fuera de la UE
- **WHEN** se guarda un cliente con una identificación fiscal de otro país
- **THEN** se acepta sin validar su formato, junto con el país del cliente

## ADDED Requirements

### Requirement: Eliminación de clientes
Un usuario autorizado SHALL poder eliminar un cliente que no tenga pedidos. Si el cliente tiene pedidos en cualquier estado, la eliminación SHALL rechazarse. Las facturas del cliente SHALL conservar íntegros los datos del cliente copiados al emitirlas.

#### Scenario: Eliminar un cliente con facturas emitidas
- **WHEN** un usuario autorizado elimina un cliente sin pedidos que tiene facturas emitidas
- **THEN** el cliente se elimina, sus facturas siguen mostrando los datos del cliente con los que se emitieron y la operación queda auditada

#### Scenario: Eliminar un cliente con pedidos
- **WHEN** se intenta eliminar un cliente que tiene algún pedido
- **THEN** la operación se rechaza indicando que antes hay que eliminar sus pedidos

#### Scenario: Confirmación
- **WHEN** un usuario solicita eliminar un cliente desde la interfaz
- **THEN** se le pide confirmación porque la acción es irreversible
