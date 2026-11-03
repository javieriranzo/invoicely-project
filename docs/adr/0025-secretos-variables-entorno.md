# ADR-0025: Gestión de secretos mediante variables de entorno

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Credenciales (base de datos, SMTP, claves) siempre fuera del repositorio, que es público.

## Alternativas estudiadas
- **A. Variables de entorno**: `.env` local ignorado + `.env.example`; secretos de GitHub Actions en CI; almacén de secretos del hosting en producción.
- **B. Gestor externo (Infisical, Doppler)**: rotación y auditoría centralizadas; otro servicio.
- **C. SOPS + age en el repositorio**: complejo; arriesgado en repositorio público.

## Decisión
**Variables de entorno**, validadas con un esquema Zod al arrancar la API (si falta o es inválida alguna, la API no arranca).

## Consecuencias
- `.env*` excluido en `.gitignore` salvo `.env.example` (sin valores reales).
- Migrar a un gestor externo no requiere cambiar el código.
