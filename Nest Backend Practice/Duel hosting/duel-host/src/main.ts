import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function hosting1() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
hosting1();

async function hosting2() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
hosting2();
