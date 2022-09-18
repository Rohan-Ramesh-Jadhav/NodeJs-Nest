import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityRepository {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(): Promise<any> {
    const val = this.cityRepository.find({
      select: ['id', 'name', 'users'],
    });
    return val;
  }

  async createCity(cityData: any): Promise<any> {
    return this.cityRepository
      .createQueryBuilder()
      .insert()
      .into('city')
      .values(cityData)
      .execute();
  }

  async findCityById(id: any): Promise<any> {
    return this.cityRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateCity(id: number, data: any): Promise<any> {
    return this.cityRepository.update(id, { name: data.name });
  }

  async removeCity(id: number): Promise<any> {
    return this.cityRepository.delete(id);
  }
}
