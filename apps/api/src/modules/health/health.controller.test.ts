import 'reflect-metadata';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { healthResponseSchema } from '@invoicely/shared';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../../app.factory.js';
import { loadEnv } from '../../config/env.js';

describe('GET /api/v1/health (requisito: Comprobación de salud del sistema)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    app = await createApp(loadEnv({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('responde 200 con { status: "ok" } sin sesión', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/v1/health' });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });

  it('no contiene campos distintos de status', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/v1/health' });

    expect(healthResponseSchema.safeParse(response.json()).success).toBe(true);
  });

  it('no publica la documentación OpenAPI fuera de desarrollo', async () => {
    const response = await app.inject({ method: 'GET', url: '/api/docs' });

    expect(response.statusCode).toBe(404);
  });
});
