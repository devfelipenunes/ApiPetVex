// auth/user.entity.ts
import { Tutor } from 'src/tutor/tutor.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  googleId: string;

  @Column()
  email: string;

  @OneToMany(() => Tutor, (tutor) => tutor.user)
  tutors: Tutor[];
}
