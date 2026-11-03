import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '@invoicely/shared';

@Controller('health')
export class HealthController {
  // Público: aún no existe el guard de sesión (fase 4); se marcará con @Public() entonces.
  @Get()
  check(): HealthResponse {
    return { status: 'ok' };
  }
}
