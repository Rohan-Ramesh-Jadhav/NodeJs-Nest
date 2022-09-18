// import { TaskRepository } from './tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskesController } from './taskes.controller';
import { TaskesService } from './taskes.service';

@Module({
  // imports: [TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TaskesController],
  providers: [TaskesService],
})
export class TaskesModule {}
