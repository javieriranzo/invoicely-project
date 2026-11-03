# ADR-0018: Envío de correo por SMTP con proveedor intercambiable

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Envío de enlaces de recuperación de contraseña y, en el futuro, otras notificaciones.

## Alternativas estudiadas
- **A. SMTP estándar** desde el backend con proveedor intercambiable; captura local en desarrollo.
- **B. API propietaria de un proveedor** (Brevo, Amazon SES, Resend…) elegido desde ya.

## Decisión
**SMTP estándar** desde el backend (cliente previsto: `nodemailer` 10.x, a confirmar al
implementar). Configuración del servidor SMTP por variables de entorno.
En desarrollo, **Mailpit** (MIT) como capturador local: ningún correo sale a Internet.
El proveedor de producción se decidirá en la ronda de infraestructura.

## Motivos
Independencia del proveedor; la elección de proveedor (coste, RGPD, entregabilidad) se toma con la infraestructura.

## Consecuencias
- El modo de ejecutar Mailpit en desarrollo depende de la decisión de contenedores (pendiente).
- Las plantillas de correo estarán en español y con la identidad de Invoicely App.
