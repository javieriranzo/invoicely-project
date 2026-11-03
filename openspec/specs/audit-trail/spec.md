# audit-trail Specification

## Purpose
Define el registro inalterable de las operaciones relevantes, su consulta y la minimización de datos sensibles.

## Requirements

### Requirement: Registro de operaciones relevantes
El sistema MUST registrar las operaciones relevantes (altas, modificaciones, cambios de estado, emisión y rectificación de facturas, pagos, cambios de roles y permisos, eventos de autenticación) indicando quién, qué, sobre qué entidad y cuándo.

#### Scenario: Emisión auditada
- **WHEN** se emite una factura
- **THEN** existe un registro de auditoría con el usuario, la acción, la factura y la fecha y hora

#### Scenario: Inicio de sesión fallido
- **WHEN** falla un intento de inicio de sesión
- **THEN** queda registrado sin almacenar la contraseña introducida

### Requirement: Inalterabilidad de la auditoría
Los registros de auditoría MUST NOT poder modificarse ni eliminarse desde la aplicación.

#### Scenario: Intento de alterar la auditoría
- **WHEN** cualquier usuario, incluido un administrador, intenta modificar o borrar un registro de auditoría
- **THEN** la aplicación no ofrece esa operación y la API la rechaza

### Requirement: Consulta de la auditoría
Los usuarios con el permiso correspondiente SHALL poder consultar la auditoría con filtros por usuario, entidad, acción y fechas.

#### Scenario: Filtrar por entidad
- **WHEN** un usuario autorizado filtra la auditoría por una factura concreta
- **THEN** ve el historial de operaciones de esa factura

### Requirement: Minimización de datos en la auditoría
La auditoría MUST NOT almacenar contraseñas, tokens ni secretos.

#### Scenario: Cambio de contraseña auditado
- **WHEN** un usuario cambia su contraseña
- **THEN** se registra el evento sin incluir la contraseña antigua ni la nueva
