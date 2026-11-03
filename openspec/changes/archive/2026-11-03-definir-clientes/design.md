## Contexto

Cambio solo de especificación (decisiones del responsable, 2026-11-03).

## Base de datos (para la fase 3)

- `customers`: `name` NOT NULL; `tax_id_type` (`es_nif`, `eu_vat`, `foreign`), `tax_id`, `country_code` (ISO 3166-1 alfa-2), domicilio, `contact_name`, `email`, `phone`.
- `invoices.customer_id` opcional (`ON DELETE SET NULL`): la factura conserva la copia de los datos del cliente (snapshot). `invoices.type` (`full`, `simplified`).
- `orders.customer_id` con `ON DELETE RESTRICT`: impide eliminar clientes con pedidos.
- Límite de la simplificada en la configuración de empresa.

## API (para la fase 6)

`DELETE /api/v1/customers/{id}` → 204, o 409 si tiene pedidos. Validación de NIF y NIF-IVA en `packages/shared`.

## Frontend (para la fase 6)

Campos de identificación según el tipo elegido; diálogo de confirmación al eliminar.
