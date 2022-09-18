import { Test, TestingModule } from '@nestjs/testing';
import { StaffAppController } from './staff-app.controller';
import { StaffAppService } from './staff-app.service';

describe('StaffAppController', () => {
  let staffAppController: StaffAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StaffAppController],
      providers: [StaffAppService],
    }).compile();

    staffAppController = app.get<StaffAppController>(StaffAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(staffAppController.getHello()).toBe('Hello World!');
    });
  });
});
