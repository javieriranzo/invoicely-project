import { z } from 'zod';

/** Respuesta de `GET /api/v1/health`. Solo expone `status` (sin información interna). */
export const healthResponseSchema = z.strictObject({
  status: z.literal('ok'),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
