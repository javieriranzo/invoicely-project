import { healthResponseSchema, type HealthResponse } from '@invoicely/shared';
import { queryOptions } from '@tanstack/react-query';

async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch('/api/v1/health');
  if (!response.ok) {
    throw new Error(`Estado HTTP ${String(response.status)}`);
  }
  return healthResponseSchema.parse(await response.json());
}

export const healthQueryOptions = queryOptions({
  queryKey: ['system', 'health'],
  queryFn: fetchHealth,
  retry: false,
});
