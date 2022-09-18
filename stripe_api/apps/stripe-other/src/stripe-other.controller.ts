import { Controller, Get } from '@nestjs/common';
import { StripeOtherService } from './stripe-other.service';

@Controller()
export class StripeOtherController {
  constructor(private readonly stripeOtherService: StripeOtherService) {}

  @Get()
  getHello(): string {
    return this.stripeOtherService.getHello();
  }
}
