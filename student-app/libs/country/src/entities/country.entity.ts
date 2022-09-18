import { User } from '@app/user';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'country', type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => User, (user) => user.country)
  @JoinTable()
  users: User[];
}
