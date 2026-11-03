# ADR-0026: Criterios para los proveedores de producción (elección aplazada)

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Hay que elegir hosting, proveedor de base de datos, correo, monitorización y almacenamiento
de archivos. Los precios de los proveedores han cambiado mucho en 2026 (p. ej. Hetzner subió
precios el 1-4-2026 y el 15-6-2026; Scaleway ajustó tarifas el 1-6-2026) y el despliegue es la
última fase del plan.

## Alternativas estudiadas
- **A. Aplazar la elección** hasta la fase de despliegue y fijar ahora criterios obligatorios.
- **B. Elegir ya** entre VPS (Hetzner, OVH), PaaS europeo (Scaleway) o PaaS estadounidense con región UE (Render, Railway).

## Decisión
**A.** Criterios obligatorios para cualquier proveedor de producción:
1. Datos alojados en la UE y contrato de encargado del tratamiento conforme al RGPD.
2. Despliegue de la aplicación como contenedores Docker (ADR-0022), sin dependencias propietarias en el código.
3. PostgreSQL 18 gestionado con recuperación a un punto en el tiempo (PITR) o mecanismo equivalente.
4. Coste previsible y con límite conocido.
5. Compatibles con las obligaciones de Verifactu/conservación que se determinen en la fase de facturación.

## Consecuencias
- Ninguna decisión de código depende del proveedor (Docker, PostgreSQL, SMTP son estándar).
- La comparación de proveedores con precios vigentes se hará al inicio de la fase de despliegue.
