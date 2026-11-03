## 1. Base

- [x] 1.1 shadcn/ui sobre Base UI, alias `@/`, dependencias fijadas, sin `next-themes`. Verificación: `pnpm build` y `pnpm typecheck`.
- [x] 1.2 Tokens de color, tipografía y radio con contraste AA. Verificación: axe sin infracciones (5.1).
- [x] 1.3 Logotipo y favicon. Verificación: test `logo.test.tsx`.

## 2. Componentes

- [x] 2.1 21 componentes base con textos en español y variantes de estado en `Badge`. Verificación: `pnpm lint` y búsqueda de textos en inglés.
- [x] 2.2 Página `/sistema-de-diseno` con todos los componentes. Verificación: `showcase-coverage.mjs` (19/21 directos; `label` y `sonner` se usan a través de `FieldLabel` y `toast`).

## 3. Tests

- [x] 3.1 Tests de componentes (logotipo, página inicial con enrutador). Verificación: `pnpm test`.
- [x] 3.2 E2E con axe, foco del diálogo, confirmación y desbordamiento en 3 dispositivos. Verificación: `pnpm e2e` y `--repeat-each=5` sin fallos.

## 4. Documentación y herramientas

- [x] 4.1 ADR-0033 y ADR-0034; ADR-0011 y ADR-0020 actualizados; índice. Verificación: revisión.
- [x] 4.2 Skill `shadcn` copiada con commit fijado y `VENDORED.md`. Verificación: revisión.
- [x] 4.3 `docs/sistema-de-diseno.md`, plan, `CLAUDE.md`, `README.md`, skill `project-conventions`. Verificación: revisión de enlaces.

## 5. Aprobación

- [ ] 5.1 Aprobación visual del responsable en `/sistema-de-diseno`. Verificación: confirmación del responsable.
