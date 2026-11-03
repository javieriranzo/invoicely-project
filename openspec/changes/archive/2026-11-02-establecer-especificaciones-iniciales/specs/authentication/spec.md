## ADDED Requirements

### Requirement: Pantalla de inicio de sesión
El sistema SHALL ofrecer una pantalla de inicio de sesión con la identidad visual de Invoicely App, campo de correo electrónico, campo de contraseña con opción de mostrar u ocultar, botón de inicio de sesión, enlace de recuperación de contraseña, mensajes de validación y error, e indicador de carga durante la autenticación.

#### Scenario: Mostrar u ocultar contraseña
- **WHEN** el usuario activa la opción de mostrar la contraseña
- **THEN** el campo muestra la contraseña en claro, y al desactivarla vuelve a ocultarse

#### Scenario: Validación de formulario
- **WHEN** el usuario envía el formulario con el correo vacío o con formato inválido
- **THEN** se muestra un mensaje de validación y no se envía la petición

#### Scenario: Indicador de carga
- **WHEN** la petición de autenticación está en curso
- **THEN** se muestra un indicador de carga y el botón no permite envíos duplicados

### Requirement: Inicio de sesión con correo y contraseña
El sistema SHALL autenticar a los usuarios mediante correo electrónico y contraseña, validando las credenciales en el servidor.

#### Scenario: Credenciales correctas
- **WHEN** un usuario activo introduce un correo y contraseña válidos
- **THEN** se inicia su sesión y accede al dashboard principal

#### Scenario: Credenciales incorrectas
- **WHEN** el correo no existe o la contraseña es incorrecta
- **THEN** se muestra un mensaje genérico que no revela cuál de los dos datos es erróneo

#### Scenario: Usuario desactivado
- **WHEN** un usuario desactivado intenta iniciar sesión con credenciales correctas
- **THEN** el acceso se deniega

### Requirement: Cierre de sesión
El sistema SHALL permitir al usuario cerrar su sesión, invalidándola en el servidor.

#### Scenario: Cerrar sesión
- **WHEN** el usuario cierra sesión
- **THEN** la sesión deja de ser válida en el servidor y se le redirige a la pantalla de inicio de sesión

### Requirement: Recuperación y restablecimiento de contraseña
El sistema SHALL permitir solicitar la recuperación de la contraseña mediante el correo electrónico y restablecerla con un enlace o código de un solo uso y caducidad limitada.

#### Scenario: Solicitud de recuperación
- **WHEN** alguien solicita recuperar la contraseña de un correo
- **THEN** se muestra la misma respuesta exista o no la cuenta, y solo si existe se envían instrucciones a ese correo

#### Scenario: Enlace usado o caducado
- **WHEN** se intenta restablecer la contraseña con un enlace ya usado o caducado
- **THEN** la operación se rechaza y se ofrece solicitar uno nuevo

### Requirement: Cambio de contraseña
El sistema SHALL permitir a un usuario autenticado cambiar su contraseña indicando la contraseña actual.

#### Scenario: Contraseña actual incorrecta
- **WHEN** el usuario intenta cambiar la contraseña con una contraseña actual incorrecta
- **THEN** el cambio se rechaza
