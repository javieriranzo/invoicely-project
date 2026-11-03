## Base de datos
`invoices.customer_id`: la comprobación de borradores se hace en el servicio dentro de la transacción de borrado
(las emitidas usan `ON DELETE SET NULL`, por lo que no basta con la FK).

## API
`DELETE /api/v1/customers/{id}` → 409 si tiene pedidos o borradores. `DELETE /api/v1/invoices/{id}` → 204 solo en borrador, 409 si emitida.

## Frontend
Mensaje de error que indica qué impide el borrado.
