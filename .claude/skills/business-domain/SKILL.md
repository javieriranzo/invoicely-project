---
name: business-domain
description: Modelo de dominio de Invoicely App (entidades, relaciones, procesos, estados y glosario ES→EN). Usar al diseñar o implementar cualquier funcionalidad de negocio (productos, clientes, pedidos, facturas, pagos, usuarios, roles), al nombrar entidades en código/BD/API o al detectar una regla de negocio no definida.
---

# Dominio de negocio de Invoicely App

Invoicely App es un ERP ligero para una pequeña empresa que opera en **España**.
Esta skill explica **cómo razonar sobre el dominio**. Los requisitos concretos y vigentes
viven en OpenSpec (`openspec/specs/<capacidad>/spec.md`), que es la fuente de verdad.

## Cuándo usar esta skill

- Antes de proponer o implementar una funcionalidad de negocio.
- Al nombrar entidades, campos, endpoints o tablas (usa el glosario).
- Al encontrar una regla de negocio no especificada → regístrala como cuestión abierta.

## Regla de oro

**No inventes reglas de negocio.** Si una regla no está en `openspec/specs/` ni en esta
skill como "Acordado", añádela como *Cuestión abierta* en la propuesta OpenSpec y pregunta
al responsable del proyecto. Una suposición razonable sigue siendo una suposición.

## Glosario (término de negocio → identificador en código)

| Negocio (ES, UI) | Código / BD / API (EN) | Notas |
|---|---|---|
| Empresa | `Company` | Datos fiscales del emisor (configuración general) |
| Usuario | `User` | Persona que inicia sesión |
| Rol | `Role` | Conjunto configurable de permisos |
| Permiso | `Permission` | Acción sobre un recurso (p. ej. `invoices:issue`) |
| Producto | `Product` | Bien o servicio vendible |
| Categoría | `ProductCategory` | Clasificación de productos |
| Cliente | `Customer` | Destinatario de facturas |
| Pedido | `Order` / `OrderLine` | Solo pedidos de venta (spec `orders`) |
| Factura | `Invoice` / `InvoiceLine` | Ver skill `invoicing-management` |
| Factura rectificativa | `CorrectiveInvoice` (o `Invoice` con `type`) | Decisión de diseño pendiente |
| Serie de facturación | `InvoiceSeries` | |
| Pago / cobro | `Payment` | |
| Impuesto / tipo impositivo | `TaxRate` | IVA; ver `invoicing-management` |
| Registro de auditoría | `AuditLog` | Ver `database-architecture` |

## Entidades y relaciones (estado: PROPUESTO, pendiente de diseño funcional)

```
Company 1───* InvoiceSeries
User *───* Role *───* Permission
ProductCategory 0..1───* Product        (un nivel, categoría opcional)
Customer 1───* Order 1───* OrderLine *───1 Product   (pedido de venta; sin relación con Invoice)
Customer 0..1───* Invoice 1───* InvoiceLine   (simplificada sin cliente; snapshot de datos)
Invoice *───1 InvoiceSeries
Invoice 1───* Payment                     (un solo pago vigente; los anulados se conservan)
Invoice (rectificativa) *───1 Invoice (rectificada)
AuditLog ─── referencia a cualquier entidad auditada
```

## Acordado (decisiones ya tomadas por el responsable)

- País de operación: España. Las reglas fiscales siguen la skill `invoicing-management`.
- Una factura emitida no puede modificarse libremente; se corrige mediante rectificativa.
- Las operaciones importantes quedan auditadas (quién, qué, cuándo).
- Roles iniciales a estudiar: Administrador, Gerente, Empleado, Usuario de consulta.
  Los permisos son configurables; no todos los roles tienen los mismos.
- La interfaz es solo en español.
- **Pedidos (2026-11-03):** solo de venta; sin relación con las facturas (el estado `Facturado`
  se marca a mano); estados `Borrador`/`Confirmado`/`Facturado`/`Cancelado` con transiciones en la
  spec `orders`; edición solo en `Borrador`; se eliminan solo en `Borrador` o `Cancelado`. Glosario: `draft`, `confirmed`, `invoiced`, `cancelled`.
- **Clientes (2026-11-03):** sobre todo particulares, también empresas; de España, UE y resto del
  mundo. Ficha: nombre (obligatorio), tipo e identificación fiscal (`es_nif`, `eu_vat`, `foreign`),
  país, domicilio, contacto, correo y teléfono. Se eliminan salvo que tengan pedidos o facturas en borrador; las facturas emitidas
  conservan la copia de sus datos.
- **Facturas completas y simplificadas (2026-11-03):** la simplificada puede no tener cliente; series separadas.
- **Productos (2026-11-03):** código único, nombre, descripción, tipo (`good`/`service`), unidad,
  precio único **con IVA incluido**, tipo de IVA, categoría opcional. Sin tarifas. Se eliminan si no
  están en pedidos; si lo están, se desactivan. Líneas con precio editable y descuento % por línea.
- **Categorías (2026-11-03):** un nivel, nombre único; se eliminan solo si están vacías.
- **Pagos (2026-11-03):** un único pago por factura y por su total; forma de pago de lista fija
  (`cash`, `card`, `bank_transfer`, `bizum`, `direct_debit`); se anula (no se borra); estados de
  cobro `Pendiente`/`Pagada`; sin vencimientos.
- **Alcance (2026-11-03):** una sola empresa emisora; sin proveedores ni facturas recibidas (gastos).
- **Dashboard e informes (2026-11-03):** ver spec `reports` (facturación mes/año, pedidos pendientes,
  gráfico 12 meses, últimas facturas, pendientes de cobro; informe de facturas por periodo en CSV/Excel/PDF).
- **Stock (2026-11-03):** no se controlan existencias; los productos son un catálogo.

## Cuestiones abiertas (requieren decisión del responsable)

Las de negocio 1–11 están resueltas (ver "Acordado"). Las pendientes están en
`docs/cuestiones-abiertas.md` (fuente única).

Al resolver una cuestión: actualiza la spec en OpenSpec y mueve el punto a "Acordado".

## Procedimiento al trabajar una funcionalidad

1. Lee la spec de la capacidad en `openspec/specs/` y los cambios activos (`openspec list`).
2. Usa el glosario para nombrar; si falta un término, añádelo aquí.
3. Comprueba los estados y transiciones definidos en la spec; no añadas estados nuevos sin propuesta.
4. Toda transición de estado relevante debe auditarse.
5. Si aparece una regla no definida → cuestión abierta en la propuesta, no en el código.
