import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryRepository {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async createCountry(createData): Promise<any> {
    return await this.countryRepository
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values({
        name: createData.name,
      })
      .execute();
  }

  async findAll(): Promise<any> {
    return await this.countryRepository
      .createQueryBuilder('country')
      .select(['id', 'country'])
      .execute();
  }

  async findOne(id: number): Promise<any> {
    return await this.countryRepository
      .createQueryBuilder('country')
      .select(['id', 'country'])
      .where({ id: id })
      .execute();
  }

  async updateCountry(id, updateData): Promise<any> {
    return this.countryRepository
      .createQueryBuilder('country')
      .update(Country)
      .set({ name: updateData.name })
      .where({ id: id })
      .execute();
  }

  async deleteCountry(id: number): Promise<any> {
    return await this.countryRepository
      .createQueryBuilder('country')
      .delete()
      .from(Country)
      .where({ id: id })
      .execute();
  }
}
