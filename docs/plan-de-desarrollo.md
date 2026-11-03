# Plan de desarrollo de Invoicely App

Versión inicial: 2026-11-02. Cada fase se ejecuta como uno o varios cambios de OpenSpec
(proponer → implementar → verificar → archivar). Una fase solo se cierra con sus tests en
verde y su documentación actualizada.

## Cambios respecto al orden propuesto inicialmente

| Cambio | Motivo técnico |
|---|---|
| El esqueleto del monorepo, la CI y las herramientas de testing pasan a la **fase 1** (antes en la 13) | Si los tests y la CI llegan al final, todo el código anterior se escribe sin red. Cada fase debe entregar sus tests. |
| La **infraestructura de auditoría** pasa a la **fase 4** (antes en la 12) | Todos los módulos auditan sus operaciones desde el primer día; añadirla al final obligaría a rehacer cada módulo. La fase 12 queda para endurecimiento y revisión. |
| La **identidad visual / sistema de diseño** entra en la **fase 2** | La pantalla de login (fase 4) ya necesita la identidad de Invoicely App. |
| **Configuración de empresa, impuestos y series** se agrupan al **inicio de la fase 9** | Son requisitos previos para emitir facturas (datos del emisor, tipos de IVA, series). |
| La fase 13 pasa a ser solo **despliegue** | El testing es continuo en todas las fases. |

## Fases

### Fase 1 — Preparación del entorno y arquitectura ✅
- ✅ Entorno, skills, OpenSpec, ADR, specs iniciales, documentación base.
- ✅ **Esqueleto del monorepo** (2026-11-03, cambio `crear-esqueleto-monorepo`): `apps/web`, `apps/api`, `packages/shared`, `e2e/`; TypeScript, ESLint, Prettier, Vitest, Playwright; `compose.yaml` (PostgreSQL 18 + Mailpit); endpoint de salud; CI en GitHub Actions.
- Verificado en local: lint, tipos, formato, tests de cada nivel. ⚠️ **Pendiente:** primera ejecución de la CI en GitHub (requiere commit y push).
- Movido a la fase 2: evaluación de las skills oficiales `shadcn` y `playwright-cli` (se usan con shadcn/ui y los primeros flujos E2E reales).

### Fase 2 — Diseño funcional
- Resolver con el responsable las cuestiones abiertas de negocio (`docs/cuestiones-abiertas.md`, 1–15 y 24).
- Actualizar las specs mediante cambios de OpenSpec.
- Sistema de diseño: paleta, tipografía, espaciados, iconografía, componentes base (skill `frontend-design`), con la identidad de Invoicely App.
- Incorporar shadcn/ui y evaluar las skills oficiales `shadcn` y `playwright-cli`.

### Fase 3 — Diseño de base de datos
- Modelo completo en `schema.prisma` (entidades, relaciones, restricciones, índices), tipo de identificadores y de importes, usuarios de BD (migraciones vs. aplicación), diagrama E-R en `docs/base-de-datos.md`.
- Diseño de facturación preparado para Verifactu (registros encadenados) desde el inicio.

### Fase 4 — Autenticación, login, usuarios, roles y auditoría base
- Shell de la aplicación (menú lateral, cabecera, dashboard vacío), login, cierre de sesión, recuperación y cambio de contraseña, sesiones, límite de intentos, usuarios, roles y permisos, perfil, infraestructura de auditoría.
- Antes: decidir cuestiones 16–22 (se propondrán valores por defecto OWASP). Activar plugin `security-guidance`.

### Fase 5 — Productos y categorías
### Fase 6 — Clientes
### Fase 7 — Proveedores
### Fase 8 — Pedidos
Cada una: CRUD con listados (búsqueda, filtros, orden, paginación), permisos, auditoría, tests y documentación.

### Fase 9 — Facturación
- 9a Configuración de empresa, tipos impositivos con vigencia y series.
- 9b Borradores, emisión con numeración correlativa, inmutabilidad, rectificativas.
- 9c Documento PDF imprimible y envío por correo (a la gestoría y, si se decide, a clientes).
- 9d Cumplimiento del Reglamento SIF (RD 1007/2023) en la modalidad que se decida (cuestión abierta 26), incluida la declaración responsable del software propio.
- ⚠️ Plazo legal: el Reglamento SIF es obligatorio desde el **1-1-2027 (sociedades)** / **1-7-2027 (resto)** según el RD-ley 15/2025, salvo nuevo aplazamiento publicado en el BOE, **en cualquiera de sus dos modalidades**. No enviar registros a la AEAT no exime: obliga a la modalidad NO VERI*FACTU. Si la empresa va a expedir facturas con Invoicely App en 2027, esta fase condiciona la puesta en producción.

### Fase 10 — Pagos
### Fase 11 — Dashboard e informes
### Fase 12 — Endurecimiento de seguridad y auditoría
- Escaneo con `claude-security`, revisión OWASP ASVS, revisión de la auditoría, pruebas de restauración de copias.

### Fase 13 — Despliegue
- Elección de proveedores con los criterios de ADR-0026 y precios vigentes, despliegue continuo, monitorización, copias en tres capas (ADR-0028), entorno de preproducción.

## Primeras tareas recomendadas

1. Decidir la visibilidad del repositorio (cuestión 25), hacer el primer commit y comprobar la CI en GitHub.
2. Sesión de preguntas de negocio por bloques (fase 2).
3. Sistema de diseño e incorporación de shadcn/ui (fase 2).
