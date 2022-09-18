import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('name')
export class Name {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

}
