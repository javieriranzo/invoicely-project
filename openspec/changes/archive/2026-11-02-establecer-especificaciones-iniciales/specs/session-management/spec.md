## ADDED Requirements

### Requirement: Rutas privadas protegidas
El sistema SHALL impedir el acceso a cualquier funcionalidad privada sin una sesión válida, tanto en la interfaz como en la API.

#### Scenario: Acceso sin sesión desde la interfaz
- **WHEN** un usuario sin sesión abre una ruta privada
- **THEN** se le redirige a la pantalla de inicio de sesión

#### Scenario: Acceso sin sesión a la API
- **WHEN** se llama a un endpoint privado sin sesión válida
- **THEN** la API responde con error de no autenticado y no devuelve datos

### Requirement: Expiración de sesión
Las sesiones SHALL expirar tras un tiempo máximo y tras un periodo de inactividad, cuyos valores se definirán en un cambio posterior.

#### Scenario: Sesión expirada
- **WHEN** el usuario realiza una acción con la sesión expirada
- **THEN** se le informa de que la sesión ha caducado y se le redirige al inicio de sesión

### Requirement: Persistencia segura de sesión
La sesión SHALL persistir entre recargas de la página sin exponer credenciales ni identificadores de sesión a código JavaScript de la página.

#### Scenario: Recarga de la página
- **WHEN** un usuario con sesión válida recarga la página
- **THEN** sigue autenticado
