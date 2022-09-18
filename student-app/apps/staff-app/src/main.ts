import { NestFactory } from '@nestjs/core';
import { StaffAppModule } from './staff-app.module';

async function bootstrap() {
  const app = await NestFactory.create(StaffAppModule);
  await app.listen(3000);
}
bootstrap();
