---
name: business-domain
description: Modelo de dominio de Invoicely App (entidades, relaciones, procesos, estados y glosario ES→EN). Usar al diseñar o implementar cualquier funcionalidad de negocio (productos, clientes, proveedores, pedidos, facturas, pagos, usuarios, roles), al nombrar entidades en código/BD/API o al detectar una regla de negocio no definida.
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
| Proveedor | `Supplier` | Proveedor de la empresa |
| Pedido | `Order` / `OrderLine` | Ver cuestiones abiertas (venta/compra) |
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
ProductCategory 1───* Product            (¿jerarquía de categorías? → abierta)
Customer 1───* Order 1───* OrderLine *───1 Product
Customer 1───* Invoice 1───* InvoiceLine
Invoice *───1 InvoiceSeries
Invoice 1───* Payment                     (¿pagos parciales / un pago a varias facturas? → abierta)
Invoice (rectificativa) *───1 Invoice (rectificada)
Supplier ───  (relación con productos/pedidos de compra → abierta)
AuditLog ─── referencia a cualquier entidad auditada
```

## Acordado (decisiones ya tomadas por el responsable)

- País de operación: España. Las reglas fiscales siguen la skill `invoicing-management`.
- Una factura emitida no puede modificarse libremente; se corrige mediante rectificativa.
- Las operaciones importantes quedan auditadas (quién, qué, cuándo).
- Roles iniciales a estudiar: Administrador, Gerente, Empleado, Usuario de consulta.
  Los permisos son configurables; no todos los roles tienen los mismos.
- La interfaz es solo en español.

## Cuestiones abiertas (requieren decisión del responsable)

1. ¿Los pedidos son solo de venta, solo de compra a proveedores, o ambos?
2. Flujo pedido → factura: ¿una factura por pedido, varias, agrupación de pedidos?
3. Estados de pedido (p. ej. borrador, confirmado, servido, cancelado): por definir.
4. ¿Gestión de stock/inventario? (no solicitada hasta ahora).
5. ¿Clientes particulares (sin NIF) además de empresas? Afecta a factura simplificada.
6. ¿Pagos parciales? ¿Un pago puede cubrir varias facturas?
7. ¿Multiempresa (varias empresas en una instalación)? Por defecto se asume **una** empresa.
8. ¿Facturas recibidas de proveedores (gastos) entran en alcance?
9. ¿Precios con varias tarifas, descuentos por línea o por documento?

Al resolver una cuestión: actualiza la spec en OpenSpec y mueve el punto a "Acordado".

## Procedimiento al trabajar una funcionalidad

1. Lee la spec de la capacidad en `openspec/specs/` y los cambios activos (`openspec list`).
2. Usa el glosario para nombrar; si falta un término, añádelo aquí.
3. Comprueba los estados y transiciones definidos en la spec; no añadas estados nuevos sin propuesta.
4. Toda transición de estado relevante debe auditarse.
5. Si aparece una regla no definida → cuestión abierta en la propuesta, no en el código.
