import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const port = Number(process.env.BOOKING_SERVICE_PORT ?? 4003);
  await app.listen(port);
  Logger.log('booking-service listening on port ' + port, 'Bootstrap');
}
bootstrap();
