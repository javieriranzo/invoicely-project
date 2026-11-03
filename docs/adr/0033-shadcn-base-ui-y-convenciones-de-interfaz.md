# ADR-0033: shadcn/ui sobre Base UI, utilidades y convenciones de la interfaz

- **Estado:** Aprobado
- **Fecha:** 2026-11-03
- **Decisor:** Claude Code por delegación del responsable del proyecto
- **Completa:** ADR-0011

## Contexto y problema
Al inicializar shadcn/ui (ADR-0011) hay que elegir la librería de primitivas, la fuente, los iconos,
los avisos y cómo se nombran las rutas de la interfaz. ADR-0011 dejaba pendiente la skill oficial `shadcn`.

## Alternativas estudiadas
- **Primitivas:** (A) **Base UI** 1.9: opción por defecto de shadcn desde 2026, del mismo equipo que Radix, MIT, estable; (B) Radix: más ejemplos históricos, mismo soporte en shadcn; (C) React Aria: otra API.
- **Fuente:** (A) **Geist** del preset `nova`, alojada en el proyecto con `@fontsource-variable/geist` (OFL-1.1); (B) cargarla desde Google Fonts: envía la IP de cada usuario a un tercero (RGPD).
- **Unión de clases:** (A) **`cn`** 0.5, paquete oficial de shadcn (repositorio `shadcn-ui/cn`, firma de procedencia npm, sin dependencias ni scripts) que genera el CLI 4.23; (B) `clsx` + `tailwind-merge`: más maduros, pero habría que reescribir lo generado.
- **Rutas de la interfaz:** (A) **en español** (`/clientes`, `/facturas`): la interfaz es solo en español y la URL es visible; (B) en inglés, como la API.
- **Skill `shadcn`:** (A) **copiarla** desde el repositorio oficial con commit fijado; (B) instalarla con `npx skills add`: sin versión fijada.
- **Skill `playwright-cli`:** (A) adoptarla; (B) **no adoptarla por ahora**: exige instalar `@playwright/cli` globalmente y sus casos de uso ya los cubren los tests de Playwright y la extensión de Chrome de Claude Code.

## Decisión
- shadcn/ui 4.23 con **Base UI** (estilo `base-nova`), iconos `lucide-react` 1.66, avisos `sonner` 2.0, animaciones `tw-animate-css` 1.4, fuente **Geist** local y `cn` 0.5.1. Versiones exactas en `apps/web/package.json`.
- Sin `next-themes`: solo modo claro (decisión del responsable).
- Alias `@/` → `apps/web/src` (tsconfig `paths` + `resolve.tsconfigPaths` de Vite 8).
- Rutas de la interfaz en español; código, componentes y API en inglés.
- Skill oficial `shadcn` copiada en `.claude/skills/shadcn` (commit `4aaea19`, MIT, CLI fijado a 4.23.0; ver su `VENDORED.md`).
- `playwright-cli`: no se adopta; se reevaluará si los tests E2E o la depuración en navegador lo requieren.

## Motivos
Seguir la opción por defecto y mantenida de shadcn reduce fricción con su CLI, su documentación y su skill;
la fuente local evita transferencias de datos a terceros.

## Consecuencias
- Los componentes generados son código del proyecto: se revisan, se traducen sus textos al español y se fijan sus dependencias.
- Los disparadores usan la prop `render` (Base UI), no `asChild` (Radix).
- No se añaden componentes de registros de terceros sin ADR.
