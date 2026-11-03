---
name: invoicing-management
description: Reglas de facturación de Invoicely App para España (numeración, series, estados, IVA, rectificativas, abonos, pagos, vencimientos, conservación, Verifactu y factura electrónica B2B). Usar en cualquier tarea que cree, modifique o consulte facturas, series, impuestos o pagos.
---

# Facturación (España)

Jurisdicción: **España (territorio común)**. Los territorios forales (País Vasco con
TicketBAI, Navarra) tienen regímenes propios: **fuera de alcance** salvo decisión expresa.

> Esta skill resume normativa con su fuente. Antes de implementar una regla fiscal,
> comprueba la versión consolidada vigente en el BOE. Si hay duda, **pregunta**: no
> inventes requisitos legales. Las fechas de calendario normativo cambian con frecuencia.

## Marco normativo (verificado el 2026-11-02)

| Norma | Qué regula | Estado |
|---|---|---|
| RD 1619/2012, Reglamento de facturación (BOE-A-2012-14696, consolidado) | Contenido, series, rectificativas, plazos, conservación | Vigente |
| Ley 37/1992 del IVA (art. 80) | Modificación de la base imponible | Vigente |
| Ley 58/2003 General Tributaria | Plazo de conservación (art. 19 RF remite a ella) | Vigente |
| RD 1007/2023 (Reglamento Verifactu / SIF) y Orden HAC/1177/2024 | Requisitos de los sistemas informáticos de facturación | Vigente; obligatoriedad aplazada por RD-ley 15/2025: **1-1-2027 sociedades, 1-7-2027 resto**. Hay anuncios no confirmados en BOE de un nuevo aplazamiento: **verificar** |
| Ley 18/2022 "Crea y Crece", RD 238/2026 y Orden HAC/1028/2026 | Factura electrónica obligatoria B2B | Aprobada; plazos según volumen de operaciones (≈ oct-2027 > 8 M€, ≈ oct-2028 resto). **Verificar fechas exactas en BOE** |

## Reglas extraídas del Reglamento de facturación

### Numeración y series (arts. 6.1.a y 7.1.a)
- Toda factura lleva **número y, en su caso, serie**; la numeración es **correlativa dentro de cada serie**.
- Series separadas **permitidas** por causas justificadas (varios establecimientos, tipos de operación).
- Series separadas **obligatorias** para: **facturas rectificativas**, facturas expedidas por el destinatario o por terceros, y si en el mismo año natural se emiten facturas completas y simplificadas.
- Consecuencias de implementación: el número se asigna **al emitir** (no al crear el borrador), de forma atómica y sin huecos dentro de la serie; un borrador no consume número.

### Contenido mínimo de la factura completa (art. 6)
Número/serie, fecha de expedición, fecha de operación si es distinta, nombre/razón social y
NIF de emisor y destinatario, domicilios, descripción de las operaciones, base imponible,
tipo(s) impositivo(s), cuota(s) y, en su caso, menciones obligatorias (exenciones,
inversión del sujeto pasivo, etc.). Validar el texto vigente del art. 6 antes de cerrar el modelo.

### Factura simplificada (arts. 4 y 7)
- Hasta **400 € IVA incluido**, o hasta **3.000 €** en los sectores del art. 4.1.b (comercio minorista, hostelería, transporte de personas, etc.).
- No admitida en ciertas operaciones (p. ej. entregas intracomunitarias, art. 4.4).
- **Acordado (2026-11-03): se usa**, junto con la completa; serie propia; puede no tener cliente. Límite configurable (400 € por defecto); si aplica el de 3.000 € lo confirma la gestoría (cuestión 12).
- Hay clientes en la UE y fuera de ella: las reglas de IVA intracomunitario y exportación son cuestión abierta 12.

### Plazo de expedición (art. 11)
- En el momento de la operación; si el destinatario es empresario/profesional, **antes del día 16 del mes siguiente** al devengo.

### Rectificativas (art. 15)
- Proceden cuando la factura incumple requisitos de los arts. 6/7, cuotas mal determinadas o modificación de base imponible (art. 80 LIVA).
- Plazo: en cuanto se conozca la causa, siempre que no hayan pasado **4 años** desde el devengo.
- Serie **específica**, identificación de la factura rectificada (o del periodo, en descuentos por volumen) y expresión de la rectificación en base, tipo y cuota.
- "Abono" en lenguaje comercial = rectificativa con importes negativos (o por diferencias). Método (sustitución vs. diferencias) → **decisión pendiente**.

### Conservación (art. 19)
- Copias de facturas emitidas y recibidas durante el plazo de la **Ley General Tributaria**, en su contenido original y ordenadas. El plazo concreto aplicable debe confirmarse (prescripción tributaria; plazos mercantiles pueden ser mayores). → **Decisión pendiente**: política de retención.

## Uso previsto por la empresa (declarado por el responsable, 2026-11-02)

La empresa usará Invoicely App para **generar las facturas, imprimirlas y/o enviarlas por correo
para entregarlas a la gestoría**. Ha indicado que **no** va a facturar con VERI*FACTU (envío de
registros a la AEAT).

## Ámbito del Reglamento SIF (RD 1007/2023) — verificado en las FAQ de la AEAT el 2026-11-02

- Un SIF es "un sistema informático utilizado para expedir FACTURAS" (art. 1.2 RRSIF). Si Invoicely App expide las facturas, **es un SIF**, aunque no envíe nada a la AEAT.
- El Reglamento tiene **dos modalidades**; no enviar a la AEAT no exime, sino que obliga a la modalidad **NO VERI*FACTU**: registros de facturación encadenados, **firma electrónica** de los registros, **registro de eventos**, exportación de registros para inspecciones y capacidad de remitirlos si la AEAT lo requiere.
- **Software de desarrollo propio:** "Si el software hubiera sido desarrollado por la propia empresa, será esta la que deba certificarlo" mediante **declaración responsable** (art. 13 RRSIF), una por versión, accesible dentro del propio sistema.
- Excepción Word/Excel: la AEAT excluye las hojas de cálculo y procesadores de texto usados *exclusivamente* para introducir datos, expedir, imprimir y conservar; pasan a ser SIF si procesan los datos para generar libros, contabilidad u otros resultados. Invoicely App es software específico de facturación con numeración, pagos e informes: aplicarle esa excepción es una interpretación de riesgo que **debe confirmar un asesor fiscal**.
- Exclusiones: empresas acogidas al **SII**; territorios forales (País Vasco, Navarra); quien factura solo de forma manual.
- Modalidad elegida por la empresa: **pendiente** (cuestión abierta 26). No implementar nada de Verifactu/NO VERI*FACTU sin esa decisión.

## Inmutabilidad y trazabilidad (requisito del proyecto)

- Estados mínimos propuestos: `draft` → `issued` (cobro: `pending` / `paid`) ; `issued` → rectificada (por otra factura). **Pendiente de aprobación** en la spec de facturas.
- Un `draft` es editable y eliminable. Una factura `issued` **no se modifica ni se borra** jamás: solo cambia su estado de cobro y se puede rectificar.
- El Reglamento SIF exige registros de facturación encadenados (huella/hash) y QR en la factura en ambas modalidades, y además firma y registro de eventos en la modalidad NO VERI*FACTU; diseñar el modelo **desde el inicio** para no tener que migrar. Detalle técnico: investigar las especificaciones de la AEAT antes de la fase de facturación.

## IVA

- **Precios con IVA incluido (acordado 2026-11-03):** la base y la cuota se calculan a partir del precio final; el método de redondeo está pendiente (cuestión 29) y debe documentarse antes de implementarlo. Descuento % por línea.

- Tipos generales vigentes a verificar al implementar (general, reducido, superreducido, exento). **No codificar tipos fijos**: los tipos son datos configurables con vigencia temporal.
- Recargo de equivalencia, IRPF en facturas de profesionales, inversión del sujeto pasivo, operaciones intracomunitarias: **cuestiones abiertas** (dependen de la actividad de la empresa).

## Pagos y vencimientos

- **Acordado (2026-11-03):** pago único por el total, sin pagos parciales ni vencimientos; estados `Pendiente`/`Pagada`; los pagos se anulan, no se borran; cada pago y anulación se audita.

## Checklist antes de dar por terminada una tarea de facturación

- [ ] La regla aplicada cita su fuente (artículo/norma) en la spec OpenSpec.
- [ ] Numeración asignada en transacción, sin huecos, con tests de concurrencia.
- [ ] Ninguna ruta de API permite modificar o borrar una factura emitida (test).
- [ ] Toda emisión, rectificación y pago genera registro de auditoría (test).
- [ ] Importes con aritmética decimal exacta (nunca coma flotante) y redondeo documentado.
