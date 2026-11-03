# ADR-0016: Sesiones almacenadas en servidor (PostgreSQL)

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Mantener la sesión de forma segura, sin exponer credenciales al JavaScript de la página, con
revocación inmediata (usuario desactivado, cierre de sesión) y expiración por inactividad.

## Alternativas estudiadas
- **A. Sesiones en servidor (PostgreSQL)** con identificador opaco en cookie `HttpOnly`, `Secure`, `SameSite`.
- **B. JWT de acceso + refresco**: sin estado; la revocación inmediata exige listas de bloqueo.
- **C. Cookie cifrada sin estado** (`@fastify/secure-session`): simple; no revocable.

## Decisión
**Sesiones en servidor** guardadas en PostgreSQL. El navegador solo recibe un identificador
aleatorio de alta entropía en una cookie `HttpOnly`, `Secure`, `SameSite=Lax` (o `Strict`,
a fijar al implementar). En la base de datos se guarda un **hash** del identificador, no el valor.

## Motivos
Única opción que cumple directamente la revocación inmediata exigida por las specs.

## Consecuencias
- Rotación del identificador al iniciar sesión (prevención de fijación de sesión).
- Duración máxima, inactividad y "recordar sesión": pendientes (cuestión abierta 19).
- SPA y API servidas bajo el mismo sitio para que la cookie funcione sin CORS con credenciales (a concretar en infraestructura).
- Limpieza periódica de sesiones caducadas.
