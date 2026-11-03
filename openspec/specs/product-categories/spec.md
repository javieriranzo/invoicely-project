# product-categories Specification

## Purpose
Define la gestión de las categorías con las que se clasifican los productos.

## Requirements

### Requirement: Gestión de categorías de productos
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar categorías de productos. Los campos concretos, las reglas de validación y la posibilidad de eliminar o desactivar están pendientes de decisión.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra una categoría con datos válidos
- **THEN** la categoría queda guardada y la operación queda auditada

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica una categoría
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear o editar una categoría
- **THEN** la API rechaza la operación

### Requirement: Listado de categorías de productos
El listado de categorías de productos SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Búsqueda
- **WHEN** un usuario escribe un texto de búsqueda en el listado
- **THEN** se muestran solo las categorías de productos que coinciden, paginadas
