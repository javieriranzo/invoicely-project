## Base de datos (fase 3)
- `products`: `code` UNIQUE, `name`, `description`, `kind` (`good`, `service`), `unit`, `unit_price_gross` decimal, `tax_rate_id`, `category_id` NULL (`ON DELETE RESTRICT`), `is_active`.
- `product_categories`: `name` UNIQUE, sin `parent_id`.
- `order_lines.product_id` `ON DELETE RESTRICT` (impide eliminar productos con pedidos) + snapshot.
- `invoice_lines.product_id` NULL `ON DELETE SET NULL` + snapshot.

## API (fase 5)
`POST /api/v1/products/{id}/deactivate` y `/activate`; `DELETE` → 409 si tiene pedidos. Igual para categorías con productos.

## Frontend (fase 5)
Selector de productos solo con activos; acción Desactivar/Eliminar según el caso, con confirmación.
