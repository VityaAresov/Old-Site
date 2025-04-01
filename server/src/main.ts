import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('backend');

  const configService = app.get<ConfigService>(ConfigService);
  const port = process.env.PORT || configService.get('APP_PORT') || 3000;

  await app.listen(port);

  Logger.log(`App has been launched on port ${port} 🚀`);
}
bootstrap();
