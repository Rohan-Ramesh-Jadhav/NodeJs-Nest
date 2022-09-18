import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@app/user';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'city', length: 20, nullable: true })
  name: string;

  @OneToMany(() => User, (user) => user.userCity)
  users: User[];
}
