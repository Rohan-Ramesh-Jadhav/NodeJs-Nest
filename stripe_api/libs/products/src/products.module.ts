import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
