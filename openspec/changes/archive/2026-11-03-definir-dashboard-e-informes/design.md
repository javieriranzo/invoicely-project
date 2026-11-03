## Base de datos (fase 11)
Consultas de agregación sobre `invoices` emitidas e índice por `issue_date`; revisar con `EXPLAIN`.

## API (fase 11)
`GET /api/v1/dashboard` (devuelve solo los bloques permitidos al usuario); `GET /api/v1/reports/invoices?from&to&format=json|csv|xlsx|pdf`.
Las librerías de Excel, PDF y gráficos se elegirán con ADR en su fase.

## Frontend (fase 11)
Tarjetas de indicadores, gráfico de barras accesible (skill `dataviz`), listados con estado vacío.
