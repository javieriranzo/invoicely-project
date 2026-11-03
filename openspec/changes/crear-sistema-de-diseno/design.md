## Contexto

Preferencias del responsable (2026-11-03): sobrio y profesional, acento azul, logotipo nuevo sencillo, solo modo claro.
Decisiones técnicas en ADR-0033 y ADR-0034; guía en `docs/sistema-de-diseno.md`.

## Base de datos

Sin cambios.

## API

Sin cambios.

## Frontend

- `shadcn init --template vite --base base --preset nova` en `apps/web`; alias `@/`.
- Tokens en `src/styles.css`: neutros slate, primario blue-600, estados (success, warning, info, destructive),
  radio 0.5rem, clase `numeric`. Sin bloque `.dark`; la variante `dark` queda ligada a una clase que nunca se aplica.
- Componentes en `src/components/ui`; textos en inglés traducidos (Cerrar, Anterior, Siguiente, Cargando, Paginación).
- `Badge` con variantes `success`, `warning`, `info` para estados de negocio.
- `Logo` y `LogoMark` en `src/components/brand`; `favicon.svg`.
- Raíz con `TooltipProvider` y `Toaster` (sin `next-themes`).
- Página `/sistema-de-diseno` (`src/modules/design-system`). Pública mientras no exista autenticación.
- Helper de tests `src/test/render-with-providers.tsx` (Query + enrutador en memoria).

## Testing

- Vitest: logotipo (nombre accesible, icono decorativo) y página inicial.
- Playwright + axe (ADR-0034) en `/` y `/sistema-de-diseno`, en escritorio, tablet y móvil; foco atrapado en el diálogo
  y devuelto al cerrar con Escape; confirmación antes de eliminar; sin desplazamiento horizontal.
- Hallazgo: en dispositivos táctiles emulados, Base UI pasa el foco por sus guardas o por `<body>` al dar la vuelta con Tab;
  nunca llega a controles de la página. El test comprueba esa propiedad.
