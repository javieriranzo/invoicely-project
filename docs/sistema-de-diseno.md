# Sistema de diseño de Invoicely App

Aprobado en estilo por el responsable el 2026-11-03: **sobrio y profesional, acento azul, solo modo claro**.
Decisiones técnicas: ADR-0011, ADR-0033 y ADR-0034. Página de muestra: `/sistema-de-diseno`
(`pnpm dev` → http://127.0.0.1:5180/sistema-de-diseno).

## Fuente de verdad

| Qué | Dónde |
|---|---|
| Colores, radios, tipografía (tokens) | `apps/web/src/styles.css` |
| Componentes base (shadcn/ui, código propio) | `apps/web/src/components/ui/` |
| Logotipo | `apps/web/src/components/brand/logo.tsx`, `apps/web/public/favicon.svg` |
| Ejemplos de uso | `apps/web/src/modules/design-system/design-system-page.tsx` |

## Colores

Usa siempre los colores semánticos (`bg-primary`, `text-muted-foreground`…), nunca colores de Tailwind directos (`bg-blue-600`).

| Token | Valor | Uso |
|---|---|---|
| `primary` | blue-600 | Acción principal, enlaces, foco |
| `foreground` | slate-900 | Texto principal |
| `muted-foreground` | slate-600 | Texto secundario (≥ 4,5:1 también sobre `muted`) |
| `muted` / `secondary` | slate-100 | Fondos secundarios |
| `accent` | blue-50 / blue-800 | Elemento activo (menú, filas seleccionadas) |
| `border` / `input` | slate-200 / slate-300 | Separadores / bordes de campo |
| `destructive` | red-700 | Errores y acciones destructivas |
| `success` / `success-muted` | green-700 / green-50 | Pagada, operación correcta |
| `warning` / `warning-muted` | amber-700 / amber-50 | Pendiente, avisos |
| `info` / `info-muted` | blue-700 / blue-50 | Información, Confirmado |

## Estados de negocio → insignias (`Badge`)

| Estado | Variante |
|---|---|
| Pedido Borrador | `secondary` |
| Pedido Confirmado | `info` |
| Pedido Facturado | `default` |
| Pedido Cancelado | `outline` |
| Factura Pendiente | `warning` |
| Factura Pagada | `success` |
| Pago anulado | `destructive` |

## Tipografía y espaciado

- Fuente **Geist** (variable), alojada en el proyecto: no se carga de servicios externos.
- Títulos de página `text-3xl font-semibold tracking-tight`; de sección `text-xl font-semibold`.
- Importes: clase `numeric` (cifras tabulares, alineados a la derecha).
- Radio base `0.5rem`. Espaciado con la escala de Tailwind (múltiplos de 4 px).

## Reglas de uso

- Una acción principal (`Button` por defecto) por pantalla o diálogo.
- Toda acción irreversible usa `AlertDialog` con el botón `variant="destructive"`.
- Formularios con `Field` + `FieldLabel` (etiqueta siempre visible) y `FieldError` junto al campo, con `aria-invalid`.
- Listados: estado de carga con `Skeleton` y estado vacío con `Empty`; nunca una tabla vacía sin explicación.
- Resultado de cada operación con `toast` (`sonner`).
- Disparadores personalizados con la prop `render` (Base UI), no `asChild`.
- Botones solo con icono: `aria-label` en español y, si ayuda, `Tooltip`.
- Textos de la interfaz en español, también los ocultos para lectores de pantalla.

## Accesibilidad (WCAG 2.2 AA)

- Contraste mínimo 4,5:1 en texto normal; comprobado con axe en los tests E2E (ADR-0034).
- Foco visible en todos los controles (`ring`), diálogos con el foco atrapado y devuelto al cerrar.
- Cada pantalla nueva añade un test E2E con axe.

## Añadir un componente

1. `pnpm --filter @invoicely/web exec shadcn add <componente>` (CLI 4.23.0; skill `shadcn`).
2. Revisar el código generado, traducir al español sus textos y fijar las versiones exactas de las dependencias nuevas.
3. Añadirlo a la página de muestra y comprobar con `node .claude/skills/shadcn/scripts/showcase-coverage.mjs apps/web/src/components/ui apps/web/src/modules/design-system`.
4. `pnpm lint && pnpm typecheck && pnpm test && pnpm e2e`.
