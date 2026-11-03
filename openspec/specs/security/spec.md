# security Specification

## Purpose
Define los requisitos transversales de seguridad: almacenamiento de credenciales, fuerza bruta, autorización en el backend, validación en servidor, XSS/CSRF, secretos y errores.

## Requirements

### Requirement: Almacenamiento seguro de contraseñas
Las contraseñas MUST almacenarse únicamente como hash con un algoritmo de hash de contraseñas seguro y con sal; nunca en texto plano ni con cifrado reversible.

#### Scenario: Contraseña almacenada
- **WHEN** se crea o cambia una contraseña
- **THEN** solo se persiste su hash y la contraseña en claro no aparece en base de datos ni en logs

### Requirement: Protección frente a fuerza bruta
El sistema SHALL limitar los intentos fallidos de inicio de sesión y de recuperación de contraseña.

#### Scenario: Exceso de intentos
- **WHEN** se supera el umbral de intentos fallidos para una cuenta u origen
- **THEN** los nuevos intentos se rechazan temporalmente y el evento queda auditado

### Requirement: Autorización verificada en el backend
El backend MUST verificar la autenticación y los permisos en cada petición a un recurso privado, con independencia de lo que muestre la interfaz.

#### Scenario: Petición sin permiso
- **WHEN** un usuario autenticado llama a un endpoint para el que no tiene permiso
- **THEN** la API responde con error de acceso prohibido y no ejecuta la operación

### Requirement: Validación en servidor
Toda entrada recibida por la API MUST validarse en el servidor, aunque la interfaz ya la haya validado.

#### Scenario: Datos inválidos enviados directamente a la API
- **WHEN** se envían datos inválidos a la API sin pasar por la interfaz
- **THEN** la API los rechaza con un error de validación

### Requirement: Protección frente a XSS y CSRF
El sistema MUST impedir la ejecución de contenido introducido por usuarios como código en la interfaz, y MUST proteger frente a CSRF las peticiones que modifican datos cuando la sesión viaje en cookies.

#### Scenario: Contenido con código
- **WHEN** un usuario guarda un texto que contiene etiquetas de script
- **THEN** el texto se muestra literalmente y no se ejecuta

### Requirement: Gestión de secretos
Los secretos (credenciales de base de datos, claves, tokens de servicios) MUST proporcionarse mediante variables de entorno o un gestor de secretos y nunca almacenarse en el repositorio.

#### Scenario: Revisión del repositorio
- **WHEN** se revisa el repositorio
- **THEN** no contiene secretos reales, solo un archivo de ejemplo con nombres de variables

### Requirement: Errores sin información interna
Las respuestas de error MUST NOT exponer trazas, consultas SQL ni detalles internos del sistema.

#### Scenario: Error inesperado
- **WHEN** se produce un error interno
- **THEN** el cliente recibe un mensaje genérico con un identificador de petición y el detalle queda solo en los logs del servidor
