## ADDED Requirements

### Requirement: Aplicación web de una sola página
Invoicely App SHALL ser una aplicación web de una sola página (SPA) accesible desde el navegador, que obtiene y modifica los datos exclusivamente a través de la API del backend.

#### Scenario: Navegación entre módulos sin recarga completa
- **WHEN** un usuario autenticado navega de un módulo a otro desde el menú
- **THEN** la vista cambia sin recargar la página completa del navegador

#### Scenario: Datos siempre a través de la API
- **WHEN** la interfaz necesita consultar o modificar datos de negocio
- **THEN** lo hace mediante peticiones a la API del backend, que aplica autenticación y permisos

### Requirement: Identidad e idioma
La interfaz SHALL mostrar el nombre y la identidad visual de Invoicely App y SHALL estar íntegramente en español.

#### Scenario: Textos en español
- **WHEN** un usuario visualiza cualquier pantalla, mensaje de validación o notificación
- **THEN** el texto está en español

### Requirement: Diseño responsive
La interfaz SHALL funcionar correctamente en ordenadores, tablets y móviles.

#### Scenario: Uso en móvil
- **WHEN** un usuario accede desde una pantalla de móvil
- **THEN** la navegación y los formularios son utilizables sin desplazamiento horizontal de la página

### Requirement: Estructura de la interfaz autenticada
La interfaz autenticada SHALL incluir un menú lateral de navegación, una cabecera con acceso al usuario y a la configuración, y un dashboard principal como pantalla de inicio.

#### Scenario: Pantalla tras iniciar sesión
- **WHEN** un usuario inicia sesión correctamente
- **THEN** accede al dashboard principal con el menú lateral y la cabecera visibles

#### Scenario: Menú según permisos
- **WHEN** se muestra el menú lateral
- **THEN** solo contiene los módulos para los que el usuario tiene permiso

### Requirement: Patrones comunes de interfaz
Los listados SHALL ofrecer búsqueda, filtros, ordenación y paginación; las acciones destructivas o irreversibles SHALL pedir confirmación; las operaciones SHALL notificar éxito o error; y las vistas SHALL mostrar estados de carga y estados vacíos.

#### Scenario: Confirmación antes de una acción irreversible
- **WHEN** un usuario solicita una acción irreversible (por ejemplo, emitir una factura)
- **THEN** se le pide confirmación antes de ejecutarla

#### Scenario: Listado sin resultados
- **WHEN** un listado no tiene elementos que mostrar
- **THEN** se muestra un estado vacío explicativo en lugar de una tabla vacía

#### Scenario: Notificación de error
- **WHEN** una operación falla
- **THEN** se informa al usuario con un mensaje comprensible en español
