# ADR-0032: Vitest sin `unplugin-swc` y paquete compartido consumido desde el código fuente

- **Estado:** Aprobado
- **Fecha:** 2026-11-03
- **Decisor:** Claude Code por delegación del responsable del proyecto
- **Modifica:** ADR-0019 (apartado del backend)

## Contexto y problema
ADR-0019 preveía `unplugin-swc` + `@swc/core` para que Vitest compilara los decoradores de NestJS
con `emitDecoratorMetadata`. Al crear el esqueleto se comprobó que Vitest 5 sobre Vite 8 (Oxc) ya
emite esos metadatos: una prueba de inyección por tipo de constructor en `@nestjs/testing` pasó sin
SWC. La plantilla oficial de `@nestjs/cli` 12 tampoco lo usa.

Además, `packages/shared` debe usarse en la web, en la API y en los tests sin un paso de compilación
manual previo.

## Alternativas estudiadas
- **A. Sin `unplugin-swc`**: menos dependencias; es lo que genera NestJS 12.
- **B. Con `unplugin-swc`**: dependencia nativa adicional sin beneficio comprobado.

Para el paquete compartido:
- **A. Condición de exportación propia `@invoicely/source`** que apunta a `src/index.ts`; Vite, Vitest y `tsc` (`customConditions`) la usan; Node en ejecución usa `dist/`.
- **B. Compilar siempre `shared` antes de usarlo**: más lento en desarrollo y tests.
- **C. Alias de rutas de TypeScript**: no funcionan en tiempo de ejecución sin herramientas extra.

## Decisión
- Vitest **sin** `unplugin-swc` ni `@swc/core`.
- `packages/shared` exporta `@invoicely/source` → `src/` y `default` → `dist/`.

## Motivos
Menos dependencias y comportamiento comprobado; sin compilar `shared` en desarrollo ni en tests.

## Consecuencias
- Si aparece un decorador que Oxc no soporte, se reintroduce `unplugin-swc` con un ADR nuevo.
- La API compilada (`node dist/main.js`) necesita `packages/shared` compilado: `pnpm build` respeta el orden.
