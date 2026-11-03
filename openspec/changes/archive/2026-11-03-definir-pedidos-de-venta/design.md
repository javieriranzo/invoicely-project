## Contexto

Cambio solo de especificación: concreta reglas de negocio acordadas con el responsable el 2026-11-03.

## Base de datos

Sin cambios ahora. Para la fase 3: `orders.status` con `CHECK` sobre los cuatro valores
(`draft`, `confirmed`, `invoiced`, `cancelled`); sin clave foránea hacia `invoices`; sin columnas de stock en `products`.

## API

Sin cambios ahora. Para la fase 8: transiciones como acciones explícitas (`POST /api/v1/orders/{id}/confirm`,
`/mark-invoiced`, `/unmark-invoiced`, `/revert-to-draft`, `/cancel`); 409 en transiciones no permitidas y al editar fuera de `draft`.

## Frontend

Sin cambios ahora. Para la fase 8: acciones visibles según estado y permiso; confirmación antes de cancelar (estado final).
