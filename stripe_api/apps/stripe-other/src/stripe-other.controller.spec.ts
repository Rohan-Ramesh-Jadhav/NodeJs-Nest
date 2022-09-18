import { Test, TestingModule } from '@nestjs/testing';
import { StripeOtherController } from './stripe-other.controller';
import { StripeOtherService } from './stripe-other.service';

describe('StripeOtherController', () => {
  let stripeOtherController: StripeOtherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StripeOtherController],
      providers: [StripeOtherService],
    }).compile();

    stripeOtherController = app.get<StripeOtherController>(StripeOtherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(stripeOtherController.getHello()).toBe('Hello World!');
    });
  });
});
