# product-categories Specification

## Purpose
Define la gestión de las categorías con las que se clasifican los productos.

## Requirements

### Requirement: Gestión de categorías de productos
Los usuarios con el permiso correspondiente SHALL poder dar de alta, consultar y editar categorías de productos. Las categorías SHALL tener un solo nivel (sin subcategorías) y un nombre obligatorio y único. Un producto SHALL pertenecer a una categoría o a ninguna.

#### Scenario: Alta
- **WHEN** un usuario autorizado registra una categoría con datos válidos
- **THEN** la categoría queda guardada y la operación queda auditada

#### Scenario: Nombre duplicado
- **WHEN** se intenta guardar una categoría con el nombre de otra existente
- **THEN** se rechaza indicando que ya existe

#### Scenario: Edición
- **WHEN** un usuario autorizado modifica una categoría
- **THEN** los cambios se guardan y la operación queda auditada

#### Scenario: Sin permiso
- **WHEN** un usuario sin permiso intenta crear, editar o eliminar una categoría
- **THEN** la API rechaza la operación

### Requirement: Listado de categorías de productos
El listado de categorías de productos SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Búsqueda
- **WHEN** un usuario escribe un texto de búsqueda en el listado
- **THEN** se muestran solo las categorías de productos que coinciden, paginadas

### Requirement: Eliminación de categorías
Un usuario autorizado SHALL poder eliminar una categoría que no tenga productos. Si tiene productos, la eliminación SHALL rechazarse.

#### Scenario: Categoría con productos
- **WHEN** se intenta eliminar una categoría que tiene productos
- **THEN** la operación se rechaza indicando que antes hay que mover o eliminar sus productos

#### Scenario: Categoría vacía
- **WHEN** un usuario autorizado elimina, tras confirmarlo, una categoría sin productos
- **THEN** la categoría se elimina y la operación queda auditada
