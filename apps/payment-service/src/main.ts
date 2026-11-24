import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const port = Number(process.env.PAYMENT_SERVICE_PORT ?? 4004);
  await app.listen(port);
  Logger.log('payment-service listening on port ' + port, 'Bootstrap');
}
bootstrap();
