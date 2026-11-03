## Why

Todas las pantallas (desde el login de la fase 4) necesitan una identidad visual y unos componentes comunes,
accesibles y coherentes. Preferencias del responsable (2026-11-03): estilo sobrio y profesional, acento azul,
logotipo nuevo sencillo y solo modo claro.

## What Changes

- shadcn/ui inicializado en `apps/web` sobre **Base UI** (estilo `base-nova`), con iconos Lucide y la fuente Geist alojada en el propio proyecto.
- Paleta propia: neutros fríos, acento azul, colores semánticos (éxito, aviso, error, información) con contraste WCAG 2.2 AA.
- Logotipo SVG de Invoicely App (icono + texto) y favicon.
- Componentes base: botón, campos de formulario, selector, casilla, tarjeta, insignia, tabla, paginación, diálogo, diálogo de confirmación, menú desplegable, avisos (toasts), alerta, esqueleto de carga, indicador de carga, estado vacío, separador, tooltip.
- Página de muestra `/sistema-de-diseno` con todos los componentes, en español.
- Tests de componentes y E2E (incluida comprobación automática de accesibilidad con axe).
- ADR-0033 (Base UI, `cn`, fuente local, rutas de la interfaz en español) y ADR-0034 (axe para accesibilidad en E2E).

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `architecture`: requisito de sistema de diseño accesible y coherente.

## Fuera de alcance

- Menú lateral, cabecera y login (fase 4); modo oscuro; gráficos (fase 11).
- Protección de la página de muestra: no hay autenticación todavía; en la fase 4 pasará a estar disponible solo en desarrollo.

## Decisiones pendientes

- Ninguna de negocio. Aprobación visual del responsable sobre la página de muestra.

## Impact

`apps/web` (estilos, componentes, rutas), `e2e`, nuevas dependencias de interfaz.
