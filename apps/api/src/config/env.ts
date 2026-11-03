import { z } from 'zod';

/** Variables de entorno de la API, validadas al arrancar (ADR-0025). */
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  API_HOST: z.string().min(1).default('127.0.0.1'),
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
});

export type Env = z.infer<typeof envSchema>;

export class InvalidEnvironmentError extends Error {
  constructor(readonly issues: string[]) {
    super(`Configuración de entorno no válida:\n${issues.join('\n')}`);
    this.name = 'InvalidEnvironmentError';
  }
}

/** Lanza `InvalidEnvironmentError` sin incluir los valores recibidos (pueden ser secretos). */
export function loadEnv(source: Record<string, string | undefined> = process.env): Env {
  const result = envSchema.safeParse(source);
  if (!result.success) {
    throw new InvalidEnvironmentError(
      result.error.issues.map((issue) => `- ${issue.path.join('.')}: ${issue.message}`),
    );
  }
  return result.data;
}
