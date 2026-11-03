# Convenciones de Git

- **Rama principal:** `main`, siempre estable. Sin commits directos de funcionalidades una vez exista CI.
- **Ramas:** `feat/<nombre-del-cambio-openspec>`, `fix/<descripción>`, `chore/<descripción>`, `docs/<descripción>`. El nombre de una rama de funcionalidad coincide con el del cambio de OpenSpec.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) con descripción en español en imperativo:
  `feat(invoices): emitir factura con numeración por serie`.
  Tipos: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`, `build`, `perf`.
- **Tamaño:** commits pequeños y coherentes; no mezclar refactor con funcionalidad.
- **Integración:** pull request a `main` con CI en verde, revisión (`/code-review`; `/security-review` en autenticación, permisos o facturación) y cambio de OpenSpec verificado.
- **Secretos:** nunca en el repositorio (es público). `.env` está ignorado; solo se versiona `.env.example`.
- **Historial:** no reescribir el historial de `main`.
- **Claude Code:** no hace commit ni push salvo petición expresa del responsable.
