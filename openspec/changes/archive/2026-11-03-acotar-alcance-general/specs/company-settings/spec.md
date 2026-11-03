## ADDED Requirements

### Requirement: Empresa única
Cada instalación de Invoicely App SHALL gestionar una única empresa emisora; todas las facturas, series, clientes, productos y pedidos pertenecen a ella.

#### Scenario: Configuración de la empresa
- **WHEN** un usuario autorizado abre la configuración de empresa
- **THEN** edita los datos de la única empresa emisora, sin opción de crear otras
