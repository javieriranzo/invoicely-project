# customers Specification

## Purpose
Define la gestión de los clientes, incluidos los datos fiscales que exige la facturación.

## Requirements

### Requirement: Gestión de clientes
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar clientes. Los campos concretos, las reglas de validación y la posibilidad de eliminar o desactivar están pendientes de decisión.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra un cliente con datos válidos
- **THEN** el cliente queda guardado y la operación queda auditada

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica un cliente
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear o editar un cliente
- **THEN** la API rechaza la operación

### Requirement: Listado de clientes
El listado de clientes SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Búsqueda
- **WHEN** un usuario escribe un texto de búsqueda en el listado
- **THEN** se muestran solo los clientes que coinciden, paginados

### Requirement: Datos fiscales del cliente
El cliente SHALL poder registrar los datos que exige una factura completa para el destinatario (nombre o razón social, NIF y domicilio; RD 1619/2012, art. 6).

#### Scenario: Cliente sin datos fiscales completos
- **WHEN** se intenta emitir una factura completa a un cliente sin los datos fiscales obligatorios
- **THEN** la emisión se rechaza indicando los datos que faltan
