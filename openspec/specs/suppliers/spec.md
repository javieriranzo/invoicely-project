# suppliers Specification

## Purpose
Define la gestión de los proveedores de la empresa.

## Requirements

### Requirement: Gestión de proveedores
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar proveedores. Los campos concretos, las reglas de validación y la posibilidad de eliminar o desactivar están pendientes de decisión.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra un proveedor con datos válidos
- **THEN** el proveedor queda guardado y la operación queda auditada

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica un proveedor
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear o editar un proveedor
- **THEN** la API rechaza la operación

### Requirement: Listado de proveedores
El listado de proveedores SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Búsqueda
- **WHEN** un usuario escribe un texto de búsqueda en el listado
- **THEN** se muestran solo los proveedores que coinciden, paginados
