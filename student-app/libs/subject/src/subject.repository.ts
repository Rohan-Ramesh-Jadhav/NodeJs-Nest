import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectRepository {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async createSubject(subjectData: any): Promise<UpdateResult> {
    return this.subjectRepository
      .createQueryBuilder()
      .insert()
      .into(Subject)
      .values({ subject: subjectData.subject })
      .execute();
  }

  async findAll(): Promise<UpdateResult> {
    return this.subjectRepository
      .createQueryBuilder('subject')
      .select(['id', 'subject'])
      .execute();
  }

  async findOne(id: number): Promise<UpdateResult> {
    return this.subjectRepository
      .createQueryBuilder('subject')
      .select(['id', 'subject'])
      .where({ id: id })
      .execute();
  }
  async updateSubject(id: number, subject: any): Promise<UpdateResult> {
    return (
      this.subjectRepository
        .createQueryBuilder('subject')
        .update(Subject)
        // if key and variable matches then we can mention only variable
        .set({ subject })
        .where({ id })
        .execute()
    );
  }

  async removeSubject(id: number): Promise<DeleteResult> {
    return this.subjectRepository
      .createQueryBuilder('subject')
      .delete()
      .from(Subject)
      .where({ id: id })
      .execute();
  }
}
