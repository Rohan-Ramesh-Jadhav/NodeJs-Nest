import { ProfessiorStudentSubject } from '@app/professior_student_subject';
import { StudentSubject } from '@app/student_subject';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'subject', length: 20 })
  subject: string;

  @OneToMany(() => ProfessiorStudentSubject, (psa) => psa.users)
  professor: ProfessiorStudentSubject[];

  @OneToMany(() => StudentSubject, (ss) => ss.studentSubjects)
  studentSubject: StudentSubject[];
}
