import { User } from '@app/user';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'state', type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => User, (user) => user.state)
  @JoinTable()
  users: User[];
}
