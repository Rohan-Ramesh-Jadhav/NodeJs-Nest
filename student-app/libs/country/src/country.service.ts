import { CountryRepository } from './country.repository';
import { Injectable } from '@nestjs/common';
// import { CreateCountryDto } from './dto/create-country.dto';
// import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  async create(createCountryDto: any): Promise<any> {
    console.log(await this.countryRepository.createCountry(createCountryDto));
    return {
      state: 200,
      message: `New Country ${createCountryDto.name} created successfully`,
    };
  }

  async findAll(): Promise<any> {
    return await this.countryRepository.findAll();
  }

  async findOne(id: number): Promise<any> {
    return await this.countryRepository.findOne(id);
  }

  async update(id: number, updateCountryDto: any): Promise<any> {
    await this.countryRepository.updateCountry(id, updateCountryDto);
    return {
      state: 200,
      message: `Country by Id #${id} updated successfully`,
    };
  }

  async remove(id: number): Promise<any> {
    await this.countryRepository.deleteCountry(id);
    return {
      state: 200,
      message: `Country by id ${id}, deleted successfully`,
    };
  }
}
