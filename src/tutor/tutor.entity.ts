// tutor.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Pet } from 'src/pet/pet.entity';
import { User } from 'src/auth/user.entity';

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  telefone: string;

  @Column()
  city: string;

  @ManyToOne(() => User, (user) => user.tutors)
  user: User;

  @OneToMany(() => Pet, (pet) => pet.tutor)
  pets: Pet[];
}
