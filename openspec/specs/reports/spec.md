# reports Specification

## Purpose
Define el dashboard, los informes y las estadísticas, siempre limitados a los datos permitidos al usuario.

## Requirements

### Requirement: Informes según permisos
El dashboard y los informes SHALL mostrar únicamente datos a los que el usuario tiene permiso de acceso.

#### Scenario: Usuario sin acceso a facturación
- **WHEN** un usuario sin permiso de consulta de facturas abre el dashboard
- **THEN** no ve indicadores de facturación

### Requirement: Indicadores del dashboard
El dashboard SHALL mostrar: la facturación del mes en curso y del año en curso, con y sin IVA, comparada con el mismo periodo del año anterior; el número de pedidos en `Borrador` y en `Confirmado`; y un gráfico de barras con la facturación de los últimos 12 meses. La facturación SHALL calcularse con las facturas emitidas según su fecha de expedición, restando las rectificativas.

#### Scenario: Facturación del mes
- **WHEN** un usuario con permiso de consulta de facturas abre el dashboard
- **THEN** ve el total facturado del mes en curso con y sin IVA y la variación respecto al mismo mes del año anterior

#### Scenario: Borradores excluidos
- **WHEN** existen facturas en borrador en el periodo
- **THEN** no se incluyen en los indicadores de facturación

#### Scenario: Pedidos pendientes
- **WHEN** un usuario con permiso de consulta de pedidos abre el dashboard
- **THEN** ve cuántos pedidos hay en `Borrador` y en `Confirmado`

### Requirement: Listados del dashboard
El dashboard SHALL mostrar las 10 últimas facturas emitidas y las facturas emitidas pendientes de cobro, de la más antigua a la más reciente, con acceso a su detalle y al listado completo.

#### Scenario: Facturas pendientes
- **WHEN** hay facturas emitidas sin pago vigente
- **THEN** el dashboard las lista empezando por la más antigua

#### Scenario: Sin facturas
- **WHEN** todavía no hay facturas emitidas
- **THEN** los listados muestran un estado vacío explicativo

### Requirement: Informe de facturas por periodo
El sistema SHALL ofrecer un informe de las facturas emitidas entre dos fechas de expedición, con número, fecha, cliente, base imponible y cuota por tipo de IVA y total por factura, y totales del periodo por tipo de IVA. El informe SHALL poder exportarse a CSV, Excel y PDF.

#### Scenario: Informe para la gestoría
- **WHEN** un usuario autorizado genera el informe de un trimestre
- **THEN** ve todas las facturas emitidas en ese trimestre, incluidas simplificadas y rectificativas, con los totales por tipo de IVA

#### Scenario: Exportación
- **WHEN** un usuario exporta el informe a CSV, Excel o PDF
- **THEN** el archivo contiene los mismos datos y totales que la pantalla y la exportación queda auditada
