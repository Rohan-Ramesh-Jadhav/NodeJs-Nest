import { CityModule, City } from '@app/city';
import { CountryModule, Country } from '@app/country';
import {
  ProfessiorStudentSubject,
  ProfessiorStudentSubjectModule,
} from '@app/professior_student_subject';
import { RollModule, Roll } from '@app/roll';
import { StateModule, State } from '@app/state';
import { StudentSubjectModule, StudentSubject } from '@app/student_subject';
import { Subject, SubjectModule } from '@app/subject';
import { User, UserModule } from '@app/user';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [
        City,
        Country,
        Roll,
        State,
        StudentSubject,
        Subject,
        User,
        ProfessiorStudentSubject,
      ],
      database: 'student-record-managment',
      synchronize: false,
    }),
    CityModule,
    StateModule,
    CountryModule,
    RollModule,
    UserModule,
    SubjectModule,
    StudentSubjectModule,
    ProfessiorStudentSubjectModule,
  ],
  exports: [],
})
export class StudentAppImportsModule {}
