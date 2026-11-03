# Proposal

## Why

El responsable del proyecto ha indicado (2026-11-02) que la empresa usará Invoicely App para
generar las facturas, imprimirlas y/o enviarlas por correo electrónico para entregarlas a la
gestoría. La spec `invoices` no recoge todavía cómo se entrega la factura.

## What Changes

- Documento PDF de cada factura emitida, imprimible y con el contenido obligatorio.
- Envío por correo electrónico de facturas emitidas a la gestoría (destinatarios adicionales: pendiente).
- Fuera de alcance: cumplimiento del Reglamento SIF (QR, registros, firma), que depende de la cuestión abierta 26; envío a la AEAT; factura electrónica estructurada B2B.

## Capabilities

### New Capabilities
- (ninguna)

### Modified Capabilities
- `invoices`: añade la generación del documento imprimible y el envío por correo.

## Cuestiones abiertas

- 26 — Encaje en el Reglamento SIF (puede añadir al PDF el código QR y la leyenda obligatorios).
- 27 — Destinatarios del correo (gestoría, clientes), envío individual o en lote, formatos adicionales.
- Correo de la gestoría: ¿dato de configuración de la empresa?

## Impact

- Spec `invoices`. Backend: generación de PDF (librería a decidir con ADR) y envío SMTP (ADR-0018).
