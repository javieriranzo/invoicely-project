## Base de datos (fase 3)
`payments`: `invoice_id`, `paid_date`, `amount`, `method` (`cash`, `card`, `bank_transfer`, `bizum`, `direct_debit`),
`voided_at`, `voided_by`. Índice único parcial `(invoice_id) WHERE voided_at IS NULL` para garantizar un único pago vigente.

## API (fase 10)
`POST /api/v1/invoices/{id}/payments` (409 si ya pagada o no emitida); `POST /api/v1/payments/{id}/void`.

## Frontend (fase 10)
Acción "Registrar pago" en facturas pendientes; "Anular pago" con confirmación.
