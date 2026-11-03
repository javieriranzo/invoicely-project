# ADR-0029: Auditoría a nivel de aplicación en la misma transacción

- **Estado:** Aprobado (decidido por recomendación técnica; el responsable delegó la confirmación el 2026-11-02)
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
La spec `audit-trail` exige registrar quién, qué, sobre qué entidad y cuándo, de forma
inalterable desde la aplicación y sin datos sensibles.

## Alternativas estudiadas
- **A. Auditoría en la aplicación**: el servicio escribe el registro en una tabla `audit_logs` dentro de la **misma transacción** que la operación. Conoce el usuario, la acción de negocio y el `requestId`.
- **B. Triggers de base de datos**: capturan todo cambio de filas, pero no conocen la acción de negocio ni el usuario sin trucos de sesión; ruido alto.
- **C. Extensión pgaudit**: orientada a auditoría de sentencias SQL para administradores; no sirve como historial de negocio y depende del proveedor gestionado.

## Decisión
**A.** Tabla `audit_logs` append-only escrita por la aplicación en la misma transacción que la
operación auditada. Además, defensa en profundidad en la base de datos: el usuario de base de
datos de la aplicación **no tiene permisos `UPDATE` ni `DELETE`** sobre `audit_logs`.

## Consecuencias
- Si la operación falla, no queda registro de auditoría huérfano, y viceversa.
- Los eventos de autenticación (incluidos intentos fallidos) también se auditan.
- La separación de usuarios de base de datos (migraciones vs. aplicación) se diseñará en la fase de base de datos.
