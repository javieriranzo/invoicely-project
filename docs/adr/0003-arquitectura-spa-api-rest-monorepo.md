# ADR-0003: Arquitectura SPA + API REST independiente en monorepo

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Invoicely App debe ser una SPA accesible desde el navegador. El backend debe verificar
siempre autenticación y permisos. A medio plazo habrá integraciones externas obligatorias
en España (Verifactu, factura electrónica B2B).

## Alternativas estudiadas
- **A. SPA + API REST independiente en monorepo.** Separación clara; API reutilizable; tipos y validaciones compartidos. Dos aplicaciones que desplegar y coordinar (CORS/proxy, cookies).
- **B. Framework full-stack (Next.js, React Router framework mode).** Un único despliegue; pero no es SPA pura, frontera de API difusa y mayor acoplamiento al framework/proveedor.
- **C. SPA + backend Java/Spring Boot o .NET.** Muy maduro en entornos empresariales; dos lenguajes, sin compartir tipos ni validaciones.

## Decisión
**Opción A**: monorepo con, como mínimo, una aplicación frontend (SPA), una aplicación
backend (API REST) y paquetes compartidos (tipos y esquemas de validación).

## Motivos
Cumple el requisito de SPA, mantiene el control de permisos en el backend y una API limpia
para integraciones; el monorepo evita duplicar reglas de validación.

## Consecuencias
- Pendientes de decisión: gestor de monorepo/workspaces, framework de backend, framework y librerías de frontend, mecanismo de sesión.
- Se recomienda servir SPA y API bajo el mismo dominio para simplificar cookies seguras y CSRF (a decidir con autenticación e infraestructura).
