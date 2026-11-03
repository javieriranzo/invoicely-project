# ADR-0005: Motor de base de datos PostgreSQL

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Datos de facturación con transacciones fiables, integridad referencial, importes decimales
exactos, auditoría y acceso concurrente de varios usuarios.

## Alternativas estudiadas
- **A. PostgreSQL**: `numeric` exacto, restricciones `CHECK`, JSONB, transacciones robustas, disponible en todos los proveedores gestionados.
- **B. MySQL/MariaDB**: muy extendidos y baratos; menos expresivos en restricciones y tipos avanzados.
- **C. SQLite**: sin servidor; concurrencia de escritura limitada para un ERP multiusuario.

## Decisión
**PostgreSQL**, versión mayor **18** (última versión mayor soportada a 2026-11-02, 18.6; fin de soporte 2030-11-14).

## Motivos
Mejor encaje con los requisitos de integridad, precisión monetaria y auditoría.

## Consecuencias
- Condiciona la elección de ORM/estrategia de migraciones (pendiente).
- Forma de ejecución en desarrollo (p. ej. contenedor) y proveedor en producción: pendientes de las decisiones de infraestructura.
