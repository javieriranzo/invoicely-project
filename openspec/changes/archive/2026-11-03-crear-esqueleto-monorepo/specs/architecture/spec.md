## ADDED Requirements

### Requirement: Comprobación de salud del sistema
La API SHALL exponer un endpoint público `GET /api/v1/health` que indique si el servicio está en funcionamiento, sin revelar información interna (versiones de dependencias, configuración ni secretos).

#### Scenario: API en funcionamiento
- **WHEN** se solicita `GET /api/v1/health` sin sesión
- **THEN** la respuesta es 200 con el cuerpo `{ "status": "ok" }`

#### Scenario: Sin información interna
- **WHEN** se solicita `GET /api/v1/health`
- **THEN** la respuesta no contiene campos distintos de `status`

#### Scenario: Estado visible en la interfaz
- **WHEN** un usuario abre la página inicial de Invoicely App y la API responde
- **THEN** la página muestra en español que el servicio está disponible
