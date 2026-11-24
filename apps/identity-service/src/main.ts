import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const port = Number(process.env.IDENTITY_SERVICE_PORT ?? 4001);
  await app.listen(port);
  Logger.log('identity-service listening on port ' + port, 'Bootstrap');
}
bootstrap();
