---
name: database-architecture
description: Convenciones de base de datos de Invoicely App (modelado, nombres, relaciones, integridad referencial, migraciones, índices, transacciones, auditoría, importes monetarios y optimización de consultas). Usar al crear o modificar tablas, migraciones, consultas o el acceso a datos.
---

# Arquitectura de base de datos

> Stack aprobado: **PostgreSQL 18** (ADR-0005), **Prisma 7.10.1 fijado** (ADR-0009),
> tests de integración con **Testcontainers** (ADR-0023), copias en tres capas (ADR-0028).

## Específico de Prisma
- Nunca instalar `prisma`/`@prisma/client` sin versión explícita (la etiqueta `latest` apunta a una RC).
- Modelos en `PascalCase` singular con `@@map("tabla_plural")` y campos `camelCase` con `@map("snake_case")`, para cumplir las convenciones de nombres de abajo.
- Dinero: `Decimal @db.Decimal(p, s)`; nunca `Float`.
- Migraciones: `prisma migrate dev` en local; revisar el SQL generado antes de aceptarlo; `prisma migrate deploy` en CI/producción. Nunca `db push` fuera de prototipos locales.
- Operaciones multi-tabla con `$transaction` interactiva; bloqueos y consultas de informes con SQL tipado de Prisma dentro de la transacción.

## Cuándo usar esta skill
Al diseñar el modelo de datos de una capacidad, escribir una migración, una consulta
no trivial o cualquier operación que toque varias tablas.

## Nombres
- Tablas en inglés, `snake_case`, **plural**: `invoices`, `invoice_lines`, `product_categories`.
- Columnas `snake_case`; claves foráneas `<entidad_singular>_id` (`customer_id`).
- Booleanos con prefijo `is_` / `has_`; fechas-hora con sufijo `_at` (`issued_at`), fechas con `_date`.
- Índices `idx_<tabla>__<columnas>`, únicos `uq_<tabla>__<columnas>`, FK `fk_<tabla>__<columna>`.

## Columnas comunes
- `id`: clave primaria (tipo concreto —UUID v7 o entero— pendiente de decisión en el diseño de BD).
- `created_at`, `updated_at` en UTC (tipo con zona horaria). Presentación en `Europe/Madrid` solo en la UI.
- `created_by`, `updated_by` cuando la entidad es editable por usuarios.

## Importes y cantidades
- **Nunca** coma flotante para dinero. Tipo decimal exacto (p. ej. `numeric(14,2)` para importes, más precisión para precios unitarios/cantidades si se aprueba) o enteros en céntimos: **decisión pendiente** del diseño de BD.
- Moneda: EUR. Si en el futuro hay multimoneda, se añadirá columna `currency` mediante propuesta.
- En facturas emitidas se **copian** (snapshot) los datos de cliente, producto, precio y tipo impositivo vigentes al emitir; no se recalculan desde las tablas maestras.

## Integridad
- Toda relación tiene FK real. `ON DELETE RESTRICT` por defecto; `CASCADE` solo para hijos sin entidad propia (p. ej. líneas de un borrador), justificado en la propuesta.
- Restricciones en la BD, no solo en la aplicación: `NOT NULL`, `UNIQUE`, `CHECK` (importes ≥ 0 salvo rectificativas, estados válidos).
- Unicidad de número de factura por serie: `UNIQUE (series_id, number)`.
- Borrado lógico (`deleted_at`) solo para maestros referenciados (clientes, productos) si se aprueba; las facturas emitidas **nunca** se borran.

## Transacciones
- Cualquier operación que escriba en más de una tabla va en **una transacción**.
- Emisión de factura = transacción única: asignar número (bloqueo de la fila de la serie o secuencia por serie), cambiar estado, snapshot de datos, registro de auditoría.
- Nivel de aislamiento por defecto del motor salvo justificación; documentar los casos que requieran bloqueo explícito.

## Migraciones
- Versionadas en el repositorio, inmutables una vez aplicadas en un entorno compartido (se corrige con otra migración).
- Cada migración es revisable: nada de cambios destructivos sin plan de datos (copia → migración → verificación).
- Datos semilla (roles, permisos base) separados de las migraciones de esquema.
- Toda migración se ejecuta en CI contra una BD limpia.

## Índices y rendimiento
- Índice en cada FK y en columnas de filtro/ordenación habituales de los listados (estado, fecha, cliente).
- Paginación en todos los listados; nunca `SELECT *` sin límite desde la API.
- Revisar el plan de ejecución (`EXPLAIN`) de consultas de informes y de listados con filtros combinados.
- Evitar N+1: cargar relaciones explícitamente.

## Auditoría (ADR-0029)
- Registro append-only de operaciones relevantes: `actor_user_id`, `action`, `entity_type`, `entity_id`, `occurred_at`, `ip`, `changes` (antes/después), `request_id`.
- Se escribe en la **misma transacción** que la operación auditada.
- Nunca se actualiza ni se borra un registro de auditoría desde la aplicación; el usuario de BD de la aplicación no tiene `UPDATE`/`DELETE` sobre `audit_logs`.
- No almacenar secretos ni contraseñas en `changes`; minimizar datos personales.

## Copias de seguridad
Política en tres capas (ADR-0028): PITR del proveedor, `pg_dump` diario cifrado fuera del proveedor y prueba de restauración trimestral.
