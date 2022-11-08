import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function nestStart() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
nestStart();
