import { Body, Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('getPriceId')
  async fetchAllProducts(product_id: string): Promise<any> {
    return this.productsService.fetchPriceId();
  }

  @Get('createPaymentLink')
  async createPaymentLink(@Body() price_arr): Promise<string> {
    return this.productsService.createPaymentLink(price_arr);
  }
}
