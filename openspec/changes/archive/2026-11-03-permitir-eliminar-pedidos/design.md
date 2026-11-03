## Base de datos
`order_lines` con `ON DELETE CASCADE` desde `orders` (hijos sin entidad propia).

## API
`DELETE /api/v1/orders/{id}` → 204, o 409 si está en `confirmed` o `invoiced`.

## Frontend
Acción "Eliminar" visible solo en `Borrador` y `Cancelado`, con confirmación.
