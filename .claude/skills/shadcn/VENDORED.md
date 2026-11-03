# Skill `shadcn` (copiada)

- **Origen:** https://github.com/shadcn-ui/ui/tree/4aaea19d9cff3e0908e12a8c1d504b8c5ec34610/skills/shadcn
- **Commit:** `4aaea19d9cff3e0908e12a8c1d504b8c5ec34610` (2026-11-03)
- **Licencia:** MIT (ver `LICENSE`)
- **Decisión:** ADR-0033.

## Modificaciones locales
- `shadcn@latest` sustituido por `shadcn@4.23.0` en todos los archivos (versiones fijadas, ADR-0004).
- No se copian `agents/` (otros agentes), `evals/` ni las imágenes de `assets/`.

## Reglas del proyecto que prevalecen sobre la skill
- **No** añadir componentes de registros de terceros (community registries) sin un ADR.
- Base del proyecto: **Base UI** (`render`, no `asChild`). Solo modo claro.
- Textos de la interfaz en español; revisar los textos en inglés que traigan los componentes nuevos.

## Actualizar
Repetir la copia desde un commit nuevo, revisar el diff y mantener estas modificaciones.
