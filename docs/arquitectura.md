# Arquitectura de Invoicely App

Visión general. Las decisiones y sus alternativas están en `docs/adr/`; los requisitos, en `openspec/specs/`.

```
 Navegador (ordenador / tablet / móvil)
 ┌──────────────────────────────────────────────┐
 │ SPA  React + Vite + TanStack Router/Query    │
 │      shadcn/ui + Tailwind, RHF + Zod         │
 └───────────────┬──────────────────────────────┘
                 │ HTTPS, JSON, cookie de sesión HttpOnly
                 ▼  /api/v1
 ┌──────────────────────────────────────────────┐
 │ API  NestJS 12 sobre Fastify                 │
 │  guard de sesión + permisos · pipe Zod       │
 │  módulos de negocio · auditoría · Pino       │
 └───────┬──────────────────────────┬───────────┘
         │ Prisma 7                 │ SMTP
         ▼                          ▼
   PostgreSQL 18              Servidor de correo
   (datos, sesiones,          (Mailpit en desarrollo)
    auditoría)
```

## Principios

1. **Seguridad en el backend:** la API verifica sesión y permisos en cada petición; la SPA solo adapta la interfaz.
2. **Una sola definición de las reglas de validación:** esquemas Zod en `packages/shared`, usados por formularios y API.
3. **Integridad en la base de datos:** restricciones, transacciones y auditoría en la misma transacción.
4. **Facturación inmutable y trazable** conforme a la normativa española (preparada para Verifactu).
5. **Independencia del proveedor:** contenedores Docker, PostgreSQL y SMTP estándar (ADR-0026).

## Módulos

Ver `openspec/specs/` (16 capacidades) y el plan en `docs/plan-de-desarrollo.md`.
