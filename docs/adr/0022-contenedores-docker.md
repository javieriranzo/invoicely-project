# ADR-0022: Contenedores con Docker y Docker Compose

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Ejecutar PostgreSQL 18 (ADR-0005) y Mailpit (ADR-0018) en desarrollo de forma reproducible y empaquetar la aplicación para desplegarla.

## Alternativas estudiadas
- **A. Docker + Docker Compose**: instalado y operativo (Docker 29.1.3, Compose 2.40.3); estándar del sector.
- **B. Podman**: sin demonio, rootless; instalación nueva y pequeñas incompatibilidades con Compose.
- **C. Sin contenedores**: servicios instalados en el sistema; menos reproducible.

## Decisión
**Docker + Docker Compose**: `compose.yaml` para los servicios de desarrollo (PostgreSQL 18, Mailpit) y `Dockerfile` para la API cuando se aborde el despliegue.

## Consecuencias
- Imágenes con versión fijada (nunca `latest`).
- Los servicios de desarrollo escuchan solo en `127.0.0.1`.
