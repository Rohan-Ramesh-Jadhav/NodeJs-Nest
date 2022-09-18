import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { CityRepository } from './city.repository';
import { City } from './entities/city.entity';
import { StudentAppImportsModule } from '@app/student_app_imports';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService, CityRepository],
  exports: [TypeOrmModule, CityRepository],
})
export class CityModule {}
