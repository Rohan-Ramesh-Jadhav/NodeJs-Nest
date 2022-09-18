import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityRepository } from './city.repository';

@Injectable()
export class CityService {
  constructor(private cityRepository: CityRepository) {}

  async create(createCityDto: any) {
    await this.cityRepository.createCity(createCityDto);
    return {
      statusCode: 200,
      message: 'City created',
    };
  }

  async findAll(): Promise<any> {
    return await this.cityRepository.findAll();
  }

  async findOne(id: number): Promise<any> {
    return await this.cityRepository.findCityById(id);
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<any> {
    await this.cityRepository.updateCity(id, updateCityDto);
    return {
      status: 200,
      massage: 'Updated City successfully',
    };
  }

  async remove(id: number): Promise<any> {
    await this.cityRepository.removeCity(id);
    return {
      status: 200,
      message: `City by id ${id} deleted successfully`,
    };
  }
}
