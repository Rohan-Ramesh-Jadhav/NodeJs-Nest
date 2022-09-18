import { RollRepository } from './roll.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RollService } from './roll.service';
import { RollController } from './roll.controller';
import { Roll } from './entities/roll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roll])],
  controllers: [RollController],
  providers: [RollService, RollRepository],
  exports: [TypeOrmModule, RollRepository],
})
export class RollModule {}
