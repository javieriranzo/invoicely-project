import { describe, expect, it } from 'vitest';
import { healthResponseSchema } from './health.js';

describe('healthResponseSchema (requisito: Comprobación de salud del sistema)', () => {
  it('acepta { status: "ok" }', () => {
    expect(healthResponseSchema.parse({ status: 'ok' })).toEqual({ status: 'ok' });
  });

  it('rechaza campos adicionales para no exponer información interna', () => {
    expect(healthResponseSchema.safeParse({ status: 'ok', version: '1.0.0' }).success).toBe(false);
  });

  it('rechaza cualquier otro estado', () => {
    expect(healthResponseSchema.safeParse({ status: 'down' }).success).toBe(false);
  });
});
