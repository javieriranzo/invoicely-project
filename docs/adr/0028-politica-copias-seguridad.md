# ADR-0028: Política de copias de seguridad en tres capas

- **Estado:** Aprobado
- **Fecha:** 2026-11-02
- **Decisor:** responsable del proyecto

## Contexto y problema
Los datos de facturación no pueden perderse y deben conservarse varios años.

## Alternativas estudiadas
- **A. Tres capas**: PITR del proveedor + volcado lógico diario cifrado fuera del proveedor + pruebas de restauración.
- **B. Solo copias del proveedor**: riesgo ante fallo del proveedor o cierre de la cuenta.
- **C. Solo volcados propios**: sin PITR se puede perder hasta un día de datos.

## Decisión
**A**:
1. PITR del proveedor de base de datos gestionado.
2. `pg_dump` diario, **cifrado**, almacenado **fuera** del proveedor principal, con retención escalonada (diaria, semanal, mensual).
3. **Prueba de restauración documentada al menos trimestral.**

## Consecuencias
- Plazos de retención: pendientes de la política de conservación legal (cuestión abierta 14).
- Mecanismo y ubicación concretos: se fijarán con el proveedor (ADR-0026).
