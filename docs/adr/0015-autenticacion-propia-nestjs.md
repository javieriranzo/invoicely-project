# ADR-0015: Autenticación propia en NestJS

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Login con correo y contraseña, recuperación y cambio de contraseña, sesiones revocables al
instante y límite de intentos, integrados con roles, permisos y auditoría (specs
`authentication`, `session-management`, `security`).

## Alternativas estudiadas
- **A. Implementación propia en NestJS** sobre primitivas probadas: control total y pocas dependencias; más código y responsabilidad de seguridad propia.
- **B. Better Auth 1.7** (MIT, muy activo): funcionalidades listas; impone su esquema de tablas; integración NestJS comunitaria (`@thallesp/nestjs-better-auth`, un mantenedor) con limitaciones documentadas en Fastify.
- **C. Proveedor de identidad externo** (Keycloak, Auth0, Clerk…): delega la autenticación; coste, complejidad operativa y posibles transferencias de datos fuera de la UE.

## Decisión
**Implementación propia** con alcance cerrado: correo + contraseña, sesiones en servidor
(ADR-0016), recuperación/restablecimiento/cambio de contraseña, límite de intentos.
Primitivas: Argon2id (ADR-0017), cookies de Fastify (`@fastify/cookie`), protección CSRF,
limitación de peticiones (librería concreta a fijar al implementar, entre `@nestjs/throttler`
y `@fastify/rate-limit`, ambas mantenidas oficialmente por sus proyectos).

## Motivos
Patrón conocido para una única empresa; evita depender de una integración de un único
mantenedor en el componente más sensible.

## Consecuencias
- Implementación revisada contra OWASP ASVS / cheat sheets de autenticación y sesiones; tests específicos de cada requisito de seguridad.
- Al implementar se activará el plugin `security-guidance` (ADR-0002) y se ejecutará `/security-review`.
- Doble factor (2FA) u otros métodos (SSO, passkeys): fuera de alcance; requerirán propuesta.
