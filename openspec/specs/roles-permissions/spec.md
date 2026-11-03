# roles-permissions Specification

## Purpose
Define los roles configurables y los permisos por funcionalidad, y su aplicación en la interfaz y en el backend.

## Requirements

### Requirement: Roles configurables
El sistema SHALL permitir definir roles como conjuntos configurables de permisos. Los roles iniciales a estudiar son Administrador, Gerente, Empleado y Usuario de consulta; sus permisos concretos están pendientes de decisión.

#### Scenario: Crear un rol
- **WHEN** un usuario autorizado crea un rol y le asigna permisos
- **THEN** el rol queda disponible para asignarse a usuarios

### Requirement: Permisos por funcionalidad
Los permisos SHALL definirse por funcionalidad (recurso y acción) y SHALL poder ampliarse al añadir nuevos módulos sin cambiar el modelo de roles.

#### Scenario: Nuevo módulo
- **WHEN** se incorpora un nuevo módulo con sus permisos
- **THEN** esos permisos pueden asignarse a roles existentes

### Requirement: Aplicación de permisos
La interfaz SHALL mostrar únicamente las funcionalidades permitidas y el backend MUST rechazar cualquier operación no permitida, con independencia de la interfaz.

#### Scenario: Funcionalidad no permitida
- **WHEN** un usuario sin el permiso de una funcionalidad accede a la aplicación
- **THEN** no ve esa funcionalidad en la interfaz y la API rechaza sus peticiones a ella
