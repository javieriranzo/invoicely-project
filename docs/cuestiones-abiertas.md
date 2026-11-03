# Cuestiones abiertas (decisión del responsable del proyecto)

Registradas el 2026-11-02 en el cambio archivado `establecer-especificaciones-iniciales`.
Al resolver una: actualiza la spec afectada mediante un cambio de OpenSpec, la skill
`business-domain` (sección "Acordado") y marca aquí la fecha de resolución.

| # | Bloque | Cuestión | Necesaria antes de |
|---|---|---|---|
| 1 | Negocio | ~~¿Pedidos de venta, de compra o ambos?~~ **Resuelta 2026-11-03:** solo de venta | — |
| 2 | Negocio | ~~Relación pedido → factura~~ **Resuelta 2026-11-03:** sin relación; `Facturado` se marca a mano | — |
| 3 | Negocio | ~~Estados de los pedidos~~ **Resuelta 2026-11-03:** Borrador, Confirmado, Facturado, Cancelado (spec `orders`) | — |
| 4 | Negocio | ~~¿Gestión de stock?~~ **Resuelta 2026-11-03:** no | — |
| 5 | Negocio | ~~¿Clientes particulares sin NIF? ¿Factura simplificada?~~ **Resuelta 2026-11-03:** sobre todo particulares, también empresas, en España, UE y resto del mundo; facturas completas y simplificadas | — |
| 6 | Negocio | ~~¿Pagos parciales? ¿Un pago para varias facturas?~~ **Resuelta 2026-11-03:** pago único por factura, forma de pago de lista fija, anulable, sin vencimientos | — |
| 7 | Negocio | ~~¿Una empresa por instalación o multiempresa?~~ **Resuelta 2026-11-03:** una sola empresa | — |
| 8 | Negocio | ~~¿Facturas recibidas de proveedores (gastos)?~~ **Resuelta 2026-11-03:** no; tampoco se gestionan proveedores | — |
| 9 | Negocio | ~~¿Tarifas y descuentos?~~ **Resuelta 2026-11-03:** precio único con IVA incluido, editable en la línea; descuento % por línea | — |
| 10 | Negocio | ~~Campos de las fichas~~ **Resuelta 2026-11-03** (clientes, productos, categorías; sin proveedores) | — |
| 11 | Negocio | ~~¿Eliminar maestros o solo desactivar?~~ **Resuelta 2026-11-03:** clientes (salvo con pedidos), productos (desactivar si tienen pedidos), categorías (solo vacías) | — |
| 12 | Facturación | Régimen fiscal: IVA general, recargo de equivalencia, IRPF, intracomunitarias y exportaciones (hay clientes en la UE y fuera). Límite de la factura simplificada: ¿400 € o 3.000 € por sector? (gestoría) | Diseño de BD |
| 13 | Facturación | Método de rectificación (sustitución o diferencias); "abonos"; cómo se registra el cobro o la devolución de una rectificativa; confirmar que las rectificativas restan en la facturación del dashboard | Fase de facturación |
| 14 | Facturación | Plazo de conservación de documentos (confirmar con asesoría) | Fase de facturación |
| 15 | Facturación | ¿Empresa en el SII? ¿Volumen > 8 M€? (Reglamento SIF y factura electrónica B2B) | Diseño de BD |
| 16 | Usuarios | Permisos de cada rol inicial | Fase de autenticación |
| 17 | Usuarios | ¿Siempre al menos un Administrador activo? | Fase de autenticación |
| 18 | Usuarios | ¿Eliminar usuarios o solo desactivar? | Fase de autenticación |
| 19 | Seguridad | Duración de sesión, inactividad, "recordar sesión" | Fase de autenticación |
| 20 | Seguridad | Umbrales de bloqueo por intentos | Fase de autenticación |
| 21 | Seguridad | Política de contraseñas | Fase de autenticación |
| 22 | Seguridad | ¿Doble factor (2FA)? | Fase de autenticación |
| 23 | Seguridad | Proveedor de correo en producción | Despliegue (ADR-0026) |
| 24 | Informes | ~~Indicadores del dashboard e informes~~ **Resuelta 2026-11-03** (spec `reports`) | — |
| 26 | Facturación | Encaje en el Reglamento SIF: modalidad VERI*FACTU, modalidad NO VERI*FACTU, o que Invoicely App no expida las facturas. **Contexto (2026-11-02):** la empresa no quiere enviar a la AEAT y usará la app para generar, imprimir y/o enviar por correo las facturas a la gestoría. Recomendado confirmarlo con la gestoría/asesor fiscal | Diseño de BD |
| 27 | Facturación | Envío por correo: ¿solo a la gestoría, también a los clientes? ¿Una a una o en lote (p. ej. mensual)? ¿Formato además del PDF? | Fase de facturación |
| 28 | Negocio | ~~Facturas en borrador de un cliente que se elimina~~ **Resuelta 2026-11-03:** se impide el borrado del cliente | — |
| 29 | Facturación | Redondeo con precios con IVA incluido: ¿por línea o sobre el total por tipo de IVA? Se propondrá un método en el diseño de facturación para contrastarlo con la gestoría | Fase de facturación |
| 25 | Proyecto | ¿El repositorio de GitHub debe seguir siendo público? | Antes del primer commit con código |

Para las cuestiones 16, 19, 20 y 21 se propondrán valores por defecto razonables (OWASP)
en la propuesta de la fase de autenticación, que el responsable podrá ajustar.
