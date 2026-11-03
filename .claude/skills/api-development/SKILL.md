---
name: api-development
description: Convenciones de la API de Invoicely App (diseño REST, rutas, paginación, validación, formato de errores, autenticación, autorización por permisos, versionado y documentación). Usar al crear o modificar endpoints, contratos de API, validaciones de entrada o el manejo de errores del backend.
---

# Desarrollo de API

> Stack aprobado: **NestJS 12 sobre Fastify** (ADR-0008), validación **Zod 4** con el
> `StandardSchemaValidationPipe` nativo y `@Body({ schema })` (ADR-0010, sin `nestjs-zod`),
> autenticación propia con **sesiones en servidor** (ADR-0015, ADR-0016), **Argon2id**
> (ADR-0017), logging **Pino** (ADR-0027). Tests de API con `app.inject()` (ADR-0019).

## Específico de NestJS
- Un módulo Nest por módulo de negocio; controladores finos, lógica en servicios.
- Autorización con un guard global que exige sesión y un decorador de permiso por endpoint (`@RequirePermission('invoices:issue')`); los endpoints públicos se marcan explícitamente (`@Public()`).
- Un filtro de excepciones global traduce errores de dominio y de validación al formato Problem Details de abajo (la validación nativa devuelve 400; el filtro la convierte en 422).
- Los esquemas Zod de entrada/salida viven en `packages/shared` y se reutilizan en el frontend.

## Cuándo usar esta skill
Al diseñar un endpoint nuevo, cambiar un contrato existente, añadir validación o
errores, o proteger un recurso con permisos.

## Rutas y recursos
- Prefijo y versión: `/api/v1/...` (versionado en la ruta, ADR-0030).
- Recursos en inglés, plural, `kebab-case`: `/api/v1/customers`, `/api/v1/product-categories`.
- Subrecursos solo cuando hay pertenencia real: `/api/v1/invoices/{id}/payments`.
- Acciones de negocio que no son CRUD → sub-ruta verbal explícita con `POST`:
  `POST /api/v1/invoices/{id}/issue`, `POST /api/v1/invoices/{id}/rectify`.
  (Nunca emitir una factura con un `PATCH` de estado.)
- JSON en `camelCase`. Fechas ISO 8601 en UTC. Importes como **string decimal** (`"1234.50"`) para no perder precisión.

## Métodos y códigos
| Operación | Método | Éxito |
|---|---|---|
| Listar | GET | 200 |
| Obtener | GET | 200 / 404 |
| Crear | POST | 201 + `Location` |
| Actualizar parcial | PATCH | 200 |
| Borrar | DELETE | 204 |
| Acción de negocio | POST | 200 / 201 |

## Listados
- Paginación obligatoria: `?page=1&pageSize=25` (máx. 100). Respuesta: `{ data: [...], meta: { page, pageSize, total } }`.
- Ordenación `?sort=-issuedAt,number`; filtros por parámetros explícitos (`?status=issued&customerId=...`); búsqueda `?q=`.
- Solo se permite ordenar/filtrar por campos en lista blanca.

## Validación
- **Siempre en servidor**, aunque el frontend también valide. Esquemas declarativos compartibles con el frontend si el stack lo permite.
- Rechazar campos desconocidos. Normalizar (trim, mayúsculas de NIF) antes de validar.

## Formato de errores (RFC 9457, Problem Details)
```json
{
  "type": "https://invoicely.app/errors/validation",
  "title": "Datos no válidos",
  "status": 422,
  "detail": "La factura contiene errores.",
  "instance": "/api/v1/invoices",
  "requestId": "…",
  "errors": [{ "field": "lines[0].quantity", "code": "min", "message": "Debe ser mayor que 0" }]
}
```
- 400 petición mal formada · 401 no autenticado · 403 sin permiso · 404 no existe (o no visible) · 409 conflicto de estado (p. ej. modificar factura emitida) · 422 validación · 429 límite de intentos · 500 error interno sin detalles internos.
- Mensajes `title`/`message` en español (se muestran en la UI). Nunca exponer trazas, SQL ni datos de otros usuarios.

## Autenticación y autorización
- Todos los endpoints son **privados por defecto**; los públicos (login, recuperación de contraseña) se marcan explícitamente.
- Autorización **en el backend en cada petición**, por permiso (`recurso:acción`, p. ej. `invoices:issue`), no por nombre de rol.
- Comprobar también la pertenencia/visibilidad del recurso concreto (evitar IDOR).
- Protección CSRF si la sesión viaja en cookie; límite de intentos en login y recuperación.
- Sesión en servidor con cookie `HttpOnly`/`Secure`/`SameSite` (ADR-0016).

## Auditoría y trazabilidad
- Cada petición lleva `requestId` (cabecera `X-Request-Id`) propagado a logs y auditoría.
- Las acciones de negocio relevantes generan registro de auditoría (ver `database-architecture`).

## Documentación y contrato
- Contrato OpenAPI generado con `@nestjs/swagger` a partir de los esquemas Zod (ADR-0030), publicado solo en desarrollo.
- Todo cambio de contrato se refleja en la propuesta OpenSpec (sección "Cambios de API").
- Un cambio incompatible requiere nueva versión o plan de migración aprobado.

## Tests mínimos por endpoint
- Caso feliz, validación (422), sin autenticación (401), sin permiso (403), recurso inexistente (404), y conflicto de estado (409) cuando aplique.
