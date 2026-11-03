## ADDED Requirements

### Requirement: Gestión de pedidos
Los usuarios con el permiso correspondiente SHALL poder registrar, consultar y editar pedidos compuestos por líneas de productos. El tipo de pedido (venta, compra o ambos), sus estados y su relación con las facturas están pendientes de decisión.

#### Scenario: Registro de pedido
- **WHEN** un usuario autorizado registra un pedido con al menos una línea válida
- **THEN** el pedido queda guardado y la operación queda auditada

### Requirement: Listado de pedidos
El listado de pedidos SHALL ofrecer búsqueda, filtros, ordenación y paginación.

#### Scenario: Filtrar pedidos
- **WHEN** un usuario aplica un filtro al listado de pedidos
- **THEN** solo se muestran los pedidos que cumplen el filtro
