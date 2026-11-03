# products Specification

## Purpose
Define la gestión de los productos y servicios que vende la empresa.

## Requirements

### Requirement: Gestión de productos
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar productos. Los campos concretos, las reglas de validación y la posibilidad de eliminar o desactivar están pendientes de decisión.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra un producto con datos válidos
- **THEN** el producto queda guardado y la operación queda auditada

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica un producto
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear o editar un producto
- **THEN** la API rechaza la operación

### Requirement: Listado de productos
El listado de productos SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Búsqueda
- **WHEN** un usuario escribe un texto de búsqueda en el listado
- **THEN** se muestran solo los productos que coinciden, paginados

### Requirement: Categoría del producto
Cada producto SHALL poder asociarse a una categoría de productos.

#### Scenario: Filtrar por categoría
- **WHEN** un usuario filtra el listado de productos por una categoría
- **THEN** solo se muestran los productos de esa categoría
