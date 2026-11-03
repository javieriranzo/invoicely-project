# Proposal

## Why

Invoicely App arranca sin especificaciones. Antes de diseñar la base de datos o implementar
cualquier módulo necesitamos una línea base de requisitos **ya acordados** (documento de
partida del proyecto del 2026-11-02 y normativa española de facturación citada) y una lista
explícita de las cuestiones que el responsable del proyecto debe decidir.

## What Changes

- Se crean las especificaciones iniciales de las 16 áreas del proyecto, limitadas a los requisitos conocidos.
- No se implementa código: este cambio solo establece la línea base documental.
- Se registran las cuestiones abiertas que bloquean el detalle de cada módulo (ver abajo).
- Fuera de alcance: modelo de datos, contratos de API, diseño visual detallado, Verifactu y factura electrónica B2B a nivel técnico (tendrán sus propios cambios).

## Capabilities

### New Capabilities
- `architecture`: estructura general de la aplicación (SPA, navegación, dashboard, patrones de interfaz, idioma, responsive).
- `authentication`: inicio y cierre de sesión, recuperación, restablecimiento y cambio de contraseña.
- `session-management`: protección de rutas privadas, expiración y persistencia de sesión.
- `security`: almacenamiento de credenciales, fuerza bruta, validación en servidor, XSS/CSRF, secretos, errores.
- `user-management`: alta, edición, activación/desactivación, perfil y asignación de roles.
- `roles-permissions`: roles configurables y permisos por funcionalidad verificados en el backend.
- `products`: gestión de productos.
- `product-categories`: gestión de categorías de productos.
- `customers`: gestión de clientes.
- `suppliers`: gestión de proveedores.
- `orders`: gestión de pedidos.
- `invoices`: facturas, series, numeración, inmutabilidad, rectificativas e impuestos.
- `payments`: registro de pagos de facturas.
- `company-settings`: datos de la empresa emisora y configuración general.
- `reports`: informes y estadísticas.
- `audit-trail`: auditoría y trazabilidad de operaciones.

### Modified Capabilities
- (ninguna; no existen especificaciones previas)

## Cuestiones abiertas (decisión del responsable del proyecto)

**Negocio general**
1. ¿Pedidos de venta, de compra a proveedores o ambos?
2. Relación pedido → factura (una a una, agrupación, facturas sin pedido).
3. Estados de los pedidos.
4. ¿Gestión de stock/inventario?
5. ¿Clientes particulares sin NIF? ¿Se usará factura simplificada?
6. ¿Pagos parciales? ¿Un pago puede cubrir varias facturas?
7. ¿Una sola empresa por instalación (supuesto actual) o multiempresa?
8. ¿Facturas recibidas de proveedores (gastos) en alcance?
9. ¿Tarifas, descuentos por línea o por documento?
10. Campos concretos de productos, categorías (¿jerarquía?), clientes y proveedores.
11. ¿Se pueden eliminar maestros (clientes, productos…) o solo desactivar?

**Facturación (España)**
12. Régimen fiscal de la empresa: ¿IVA general, recargo de equivalencia, retención IRPF, operaciones intracomunitarias?
13. Método de rectificación (sustitución o por diferencias) y uso del término "abono".
14. Política de conservación de documentos (plazo a confirmar con asesoría).
15. ¿Está la empresa acogida al SII? (excluye Verifactu) ¿Volumen de operaciones > 8 M€? (calendario factura electrónica B2B).

**Usuarios y seguridad**
16. Permisos concretos de cada rol inicial (Administrador, Gerente, Empleado, Usuario de consulta).
17. ¿Debe existir siempre al menos un Administrador activo?
18. ¿Se pueden eliminar usuarios o solo desactivar?
19. Duración de la sesión, inactividad máxima y si se ofrece "recordar sesión".
20. Umbrales de bloqueo por intentos fallidos.
21. Política de contraseñas (longitud mínima, comprobación contra contraseñas filtradas).
22. ¿Doble factor (2FA)? (no solicitado hasta ahora).
23. Servicio de envío de correo para recuperación de contraseña (decisión tecnológica).

**Informes**
24. Indicadores del dashboard e informes concretos.

## Impact

- Solo documentación: `openspec/specs/` tras archivar. Sin código, API ni base de datos.
- Las decisiones tecnológicas aprobadas constan en `docs/adr/` (ADR-0001 a ADR-0005).
