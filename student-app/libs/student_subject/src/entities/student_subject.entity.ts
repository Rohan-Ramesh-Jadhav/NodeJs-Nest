import { Subject } from '@app/subject';
import { User } from '@app/user';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subject, (subject) => subject.studentSubject)
  @JoinColumn({ name: 'sub_id', referencedColumnName: 'id' })
  studentSubjects: Subject;

  @ManyToOne(() => User, (user) => user.studSubAssoc)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  users: User;
}
