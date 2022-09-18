import { User } from '@app/user';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Roll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'roll', type: 'varchar', length: 20 })
  roll: string;

  @OneToMany(() => User, (user) => user.roll)
  @JoinTable()
  users: User[];
}
