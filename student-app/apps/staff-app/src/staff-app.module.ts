import { Module } from '@nestjs/common';
import { StaffAppController } from './staff-app.controller';
import { StaffAppService } from './staff-app.service';

@Module({
  imports: [],
  controllers: [StaffAppController],
  providers: [StaffAppService],
})
export class StaffAppModule {}
