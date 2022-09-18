import { SubjectRepository } from './subject.repository';
import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(private subjectRepository: SubjectRepository) {}

  async create(createSubjectDto: any): Promise<any> {
    return this.subjectRepository.createSubject(createSubjectDto);
  }

  async findAll(): Promise<any> {
    return await this.subjectRepository.findAll();
  }

  async findOne(id: number): Promise<any> {
    return await this.subjectRepository.findOne(id);
  }

  async update(id: number, updateSubjectDto: any): Promise<any> {
    return await this.subjectRepository.updateSubject(
      id,
      updateSubjectDto.subject,
    );
  }

  async remove(id: number): Promise<any> {
    return this.subjectRepository.removeSubject(id);
  }
}
