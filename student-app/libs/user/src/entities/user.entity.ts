import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from '@app/city';
import { State } from '@app/state';
import { Country } from '@app/country';
import { Roll } from '@app/roll';
import { ProfessiorStudentSubject } from '@app/professior_student_subject';
import { StudentSubject } from '@app/student_subject';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 20 })
  address: string;

  @ManyToOne(() => City, (city) => city.users)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  userCity: string;

  @ManyToOne(() => State, (state) => state.users)
  @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
  state: string;

  @ManyToOne(() => Country, (country) => country.users)
  @JoinColumn({ name: 'country_id', referencedColumnName: 'id' })
  country: string;

  @ManyToOne(() => Roll, (roll) => roll.users)
  @JoinColumn({ name: 'roll_id', referencedColumnName: 'id' })
  roll: Roll;

  @OneToMany(() => ProfessiorStudentSubject, (pss) => pss.users)
  proStudSubAssoc: ProfessiorStudentSubject[];

  @OneToMany(() => StudentSubject, (ssa) => ssa.users)
  studSubAssoc: StudentSubject[];
}
