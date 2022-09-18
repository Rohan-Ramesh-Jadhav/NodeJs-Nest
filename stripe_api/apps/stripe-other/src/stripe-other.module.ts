import { Module } from '@nestjs/common';
import { StripeOtherController } from './stripe-other.controller';
import { StripeOtherService } from './stripe-other.service';

@Module({
  imports: [],
  controllers: [StripeOtherController],
  providers: [StripeOtherService],
})
export class StripeOtherModule {}
