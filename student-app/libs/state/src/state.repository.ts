import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';

@Injectable()
export class StateRepository {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {}

  async fetchAll(): Promise<any> {
    return await this.stateRepository.find();
  }

  async insertState(stateData): Promise<any> {
    await this.stateRepository
      .createQueryBuilder()
      .insert()
      .into('state')
      .values(stateData)
      .execute();
    return 1;
  }

  async fetchStateById(id: number): Promise<any> {
    return await this.stateRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateState(id, updateData): Promise<any> {
    return await this.stateRepository.update(id, { name: updateData.name });
  }

  async removeState(id): Promise<any> {
    return await this.stateRepository.delete(id);
  }
}
