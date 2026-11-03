# user-management Specification

## Purpose
Define la gestión de usuarios: alta, edición, activación y desactivación, asignación de roles, perfil propio y consulta de actividad.

## Requirements

### Requirement: Alta y edición de usuarios
Los usuarios con el permiso correspondiente SHALL poder dar de alta usuarios y editar sus datos; el correo electrónico MUST ser único porque identifica al usuario en el inicio de sesión.

#### Scenario: Alta de usuario
- **WHEN** un usuario autorizado da de alta un usuario con un correo no registrado
- **THEN** el usuario se crea y la operación queda auditada

#### Scenario: Correo duplicado
- **WHEN** se intenta dar de alta un usuario con un correo ya registrado
- **THEN** la operación se rechaza con un mensaje de validación

### Requirement: Activación y desactivación de usuarios
Los usuarios autorizados SHALL poder activar y desactivar usuarios; un usuario desactivado MUST NOT poder iniciar sesión.

#### Scenario: Desactivar usuario con sesión abierta
- **WHEN** se desactiva un usuario que tiene una sesión abierta
- **THEN** su sesión deja de ser válida y no puede volver a iniciar sesión

### Requirement: Asignación de roles
Los usuarios autorizados SHALL poder asignar uno o varios roles a cada usuario.

#### Scenario: Cambio de rol
- **WHEN** se cambian los roles de un usuario
- **THEN** sus permisos efectivos cambian en consecuencia y el cambio queda auditado

### Requirement: Perfil propio
Cada usuario autenticado SHALL poder consultar su perfil.

#### Scenario: Consulta del perfil
- **WHEN** un usuario abre su perfil desde la cabecera
- **THEN** ve sus datos y sus roles

### Requirement: Consulta de actividad
Los usuarios autorizados SHALL poder consultar la actividad registrada de un usuario a partir de la auditoría.

#### Scenario: Actividad de un usuario
- **WHEN** un usuario autorizado consulta la actividad de otro usuario
- **THEN** ve las operaciones auditadas realizadas por ese usuario
