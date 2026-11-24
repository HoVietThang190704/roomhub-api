import { Controller, Get } from '@nestjs/common';
import { buildHealthPayload } from '@common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return buildHealthPayload('listing-service');
  }
}
