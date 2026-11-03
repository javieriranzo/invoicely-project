# ADR-0004: Lenguaje TypeScript estricto y Node.js 26 LTS

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Elegir lenguaje para frontend y backend y versión del entorno de ejecución, en un ERP con
importes, estados y permisos donde los errores de tipos son costosos.

## Alternativas estudiadas
- **A. TypeScript estricto en todo el proyecto + Node.js 26 LTS** (Active LTS desde 2026-10-28; fin de soporte 2029-04-30).
- **B. TypeScript + Node.js 24 LTS** (mantenimiento desde 2026-10-20; fin 2028-04-30).
- **C. JavaScript sin tipos.**

## Decisión
**Opción A.** TypeScript con `strict` activado en frontend, backend y paquetes compartidos.
Node.js **26** fijado en `.nvmrc` (instalado: v26.13.0).

## Motivos
Proyecto que se pondrá en producción en 2027: conviene la LTS con mayor horizonte de soporte.
Node 22 (instalado previamente) termina su soporte el 2027-04-30.

## Consecuencias
- El desarrollador debe ejecutar `nvm use` en el proyecto (el Node por defecto del sistema sigue siendo 22 para no afectar a otros proyectos).
- Cualquier dependencia debe ser compatible con Node 26.

## Nota (2026-11-02): versión de TypeScript
TypeScript 7 (reescritura nativa) es la última versión, pero NestJS 12 (ADR-0008) fija
TypeScript `~6.0`. Se usa **TypeScript 6.0.x en todo el monorepo** para mantener una sola
versión. Revisar cuando NestJS soporte TypeScript 7.
