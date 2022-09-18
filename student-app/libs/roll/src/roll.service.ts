import { RollRepository } from './roll.repository';
import { Injectable } from '@nestjs/common';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';

@Injectable()
export class RollService {
  constructor(private rollRepository: RollRepository) {}
  async create(createRollDto: any): Promise<any> {
    return await this.rollRepository.createRoll(createRollDto);
  }

  async findAll(): Promise<any> {
    return await this.rollRepository.findAll();
  }

  async findOne(id: number): Promise<any> {
    return await this.rollRepository.findOne(id);
  }

  async update(id: number, updateRollDto: any): Promise<any> {
    return await this.rollRepository.updateRoll(id, updateRollDto);
  }

  async remove(id: number): Promise<any> {
    return await this.rollRepository.deleteRoll(id);
  }
}
