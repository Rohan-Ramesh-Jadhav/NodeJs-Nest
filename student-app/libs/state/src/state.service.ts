import { StateRepository } from './state.repository';
import { Injectable } from '@nestjs/common';
import { UpdateStateDto } from './dto/update-state.dto';

@Injectable()
export class StateService {
  constructor(private stateRepository: StateRepository) {}

  async create(createStateDto: any): Promise<object> {
    await this.stateRepository.insertState(createStateDto);
    return {
      state: 200,
      message: 'State created',
    };
  }

  async findAll(): Promise<any> {
    return await this.stateRepository.fetchAll();
  }

  async findOne(id: number): Promise<any> {
    return await this.stateRepository.fetchStateById(id);
  }

  async update(id: number, updateStateDto: any): Promise<object> {
    await this.stateRepository.updateState(id, updateStateDto);
    return {
      status: 200,
      message: `State by id ${id} updated successfully`,
    };
  }

  async remove(id: number): Promise<object> {
    await this.stateRepository.removeState(id);
    return {
      state: 200,
      message: `State by id ${id}, deleted successfully`,
    };
  }
}
