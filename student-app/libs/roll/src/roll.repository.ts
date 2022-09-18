import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roll } from './entities/roll.entity';

@Injectable()
export class RollRepository {
  constructor(
    @InjectRepository(Roll)
    private rollRepository: Repository<Roll>,
  ) {}

  async createRoll(rollData: any): Promise<any> {
    return this.rollRepository
      .createQueryBuilder('roll')
      .insert()
      .into(Roll)
      .values({ roll: rollData.roll })
      .execute();
  }

  async findAll(): Promise<any> {
    return this.rollRepository
      .createQueryBuilder('roll')
      .select(['id', 'roll'])
      .execute();
  }

  async findOne(id: number): Promise<any> {
    return this.rollRepository
      .createQueryBuilder('roll')
      .select(['id', 'roll'])
      .where({ id: id })
      .execute();
  }

  async updateRoll(id: number, updateData: any): Promise<any> {
    return this.rollRepository
      .createQueryBuilder('roll')
      .update(Roll)
      .set({ roll: updateData.roll })
      .where({ id: id })
      .execute();
  }

  async deleteRoll(id: number): Promise<any> {
    return this.rollRepository
      .createQueryBuilder('roll')
      .delete()
      .from(Roll)
      .where({ id: id })
      .execute();
  }
}
