# reports Specification

## Purpose
Define el dashboard, los informes y las estadísticas, siempre limitados a los datos permitidos al usuario.

## Requirements

### Requirement: Informes según permisos
El dashboard y los informes SHALL mostrar únicamente datos a los que el usuario tiene permiso de acceso. Los indicadores e informes concretos están pendientes de decisión.

#### Scenario: Usuario sin acceso a facturación
- **WHEN** un usuario sin permiso de consulta de facturas abre el dashboard
- **THEN** no ve indicadores de facturación
