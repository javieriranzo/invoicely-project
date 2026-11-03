## Contexto

Primer código del proyecto. Stack y versiones fijados en los ADR 0003–0030. Este diseño concreta
la estructura del monorepo y la configuración de herramientas.

## Estructura

```
package.json            scripts raíz (lint, format, typecheck, test, e2e)
pnpm-workspace.yaml     apps/*, packages/*, e2e
tsconfig.base.json      strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes
eslint.config.js        configuración plana única para todo el monorepo
compose.yaml            postgres:18.x y axllent/mailpit con versión fijada
apps/api                @invoicely/api
apps/web                @invoicely/web
packages/shared         @invoicely/shared (ESM, se consume como código fuente TS)
e2e                     @invoicely/e2e (Playwright)
```

`packages/shared` se consume directamente desde el código fuente (sin paso de build): Vite lo
transpila en la web; en la API, SWC (vía `@nestjs/cli` con `builder: swc` y `unplugin-swc` en Vitest)
lo compila. Se evita así mantener un build intermedio.

## Base de datos

Sin cambios: solo el servicio `postgres` en `compose.yaml` (usuario, contraseña y base de datos de
desarrollo tomados de `.env`). La conexión llegará con Prisma en la fase 3.

## API

- `main.ts` crea la aplicación con `FastifyAdapter`, `setGlobalPrefix('api/v1')`, logger de `nestjs-pino`
  con `redact` de `req.headers.authorization` y `req.headers.cookie`, y `enableShutdownHooks()`.
- `src/config/env.ts`: esquema Zod (`NODE_ENV`, `API_PORT`, `API_HOST`, `LOG_LEVEL`); la aplicación no arranca si no es válido (ADR-0025).
- `src/app.factory.ts`: construye y configura la app; la reutilizan `main.ts` y los tests (`app.inject()`).
- `src/modules/health`: `HealthController` con `GET /health` → `{ status: 'ok' }`, tipado con el esquema de `@invoicely/shared`.
- Swagger en `/api/docs` solo si `NODE_ENV=development` (ADR-0030).

## Frontend

- Vite con `@tanstack/router-plugin` (rutas en `src/routes`), `@vitejs/plugin-react` y `@tailwindcss/vite`.
- Proxy de desarrollo `/api` → `http://127.0.0.1:3000` (misma origen: simplifica cookies en la fase 4).
- `QueryClientProvider` + `RouterProvider`. Ruta `/` con el título "Invoicely App" y el estado del servicio
  (`useQuery` sobre `/api/v1/health`, validado con el esquema compartido).
- `<html lang="es">`.

## Testing

- `packages/shared`: test unitario del esquema.
- `apps/api`: test de API con `Test.createTestingModule` + `app.inject()`.
- `apps/web`: test de componente con Testing Library (jsdom), `fetch` simulado.
- `e2e`: Playwright con `webServer` que arranca API y web; proyectos `desktop` (Desktop Chrome),
  `tablet` (dimensiones de iPad) y `mobile` (Pixel 7).

Decisión: los tres proyectos usan Chromium (`viewport` y `userAgent` de los dispositivos) para mantener la CI
rápida; Firefox y WebKit se añadirán si aparecen problemas específicos de navegador.

## CI

`.github/workflows/ci.yml`: en `push` a `main` y `pull_request`. `permissions: contents: read`.
Acciones fijadas por SHA. Pasos: checkout, pnpm, Node desde `.nvmrc`, `pnpm install --frozen-lockfile`,
`format:check`, `lint`, `typecheck`, `test`, instalación de Chromium de Playwright y `e2e`.

## Riesgos

- `eslint-plugin-jsx-a11y` 6.10.2 no declara compatibilidad con ESLint 10 → se usa el fork mantenido
  `eslint-plugin-jsx-a11y-x` 0.2.0 (ADR-0031).
- TypeScript 7 ya está publicado, pero ADR-0004 fija 6.0.x por la CLI de NestJS y typescript-eslint.
