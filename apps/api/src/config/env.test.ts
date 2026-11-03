import { describe, expect, it } from 'vitest';
import { InvalidEnvironmentError, loadEnv } from './env.js';

describe('loadEnv', () => {
  it('aplica valores por defecto seguros', () => {
    expect(loadEnv({})).toEqual({
      NODE_ENV: 'development',
      API_HOST: '127.0.0.1',
      API_PORT: 3000,
      LOG_LEVEL: 'info',
    });
  });

  it('rechaza una configuración no válida', () => {
    expect(() => loadEnv({ API_PORT: 'no-es-un-puerto' })).toThrow(InvalidEnvironmentError);
  });

  it('no incluye los valores recibidos en el error', () => {
    try {
      loadEnv({ NODE_ENV: 'valor-secreto' });
      expect.unreachable();
    } catch (error) {
      expect((error as Error).message).not.toContain('valor-secreto');
    }
  });
});
