import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentAppImportsModule } from 'libs/student_app_imports/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, CityModule } from '@app/city';
import { Country, CountryModule } from '@app/country';
import { Roll, RollModule } from '@app/roll';
import { State, StateModule } from '@app/state';
import { StudentSubject, StudentSubjectModule } from '@app/student_subject';
import { Subject, SubjectModule } from '@app/subject';
import { User, UserModule } from '@app/user';
import {
  ProfessiorStudentSubject,
  ProfessiorStudentSubjectModule,
} from '@app/professior_student_subject';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
