import { Controller, Get } from '@nestjs/common';
import { StaffAppService } from './staff-app.service';

@Controller()
export class StaffAppController {
  constructor(private readonly staffAppService: StaffAppService) {}

  @Get()
  getHello(): string {
    return this.staffAppService.getHello();
  }
}
