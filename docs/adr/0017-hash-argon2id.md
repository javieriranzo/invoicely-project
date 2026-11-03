# ADR-0017: Hash de contraseñas con Argon2id

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Las contraseñas deben ser inútiles para un atacante aunque se filtre la base de datos.

## Alternativas estudiadas
- **A. Argon2id con `@node-rs/argon2`** (binarios precompilados, sin compilación nativa).
- **B. Argon2id con `argon2`** (compilación nativa).
- **C. scrypt** (incluido en Node; segunda opción de OWASP).
- **D. bcrypt** (trunca a 72 bytes; OWASP lo reserva a sistemas heredados).

## Decisión
**Argon2id** con **`@node-rs/argon2` 2.2.x**. Parámetros mínimos (OWASP Password Storage
Cheat Sheet, consultada 2026-11-02): **m = 19456 KiB (19 MiB), t = 2, p = 1**. Se podrán
aumentar tras medir el rendimiento del servidor de producción.

## Motivos
Primera recomendación de OWASP; instalación sin toolchain nativa.

## Consecuencias
- Los parámetros se guardan dentro del propio hash (formato PHC), lo que permite subirlos en el futuro y re-hashear al iniciar sesión.
- Política de contraseñas (longitud mínima, contraseñas filtradas): pendiente (cuestión abierta 21).
