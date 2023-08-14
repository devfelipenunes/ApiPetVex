// vacina.entity.ts
import { Pet } from 'src/pet/pet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vaccine: string;

  @Column()
  dataApplication: Date;

  @Column()
  laboratory: string;

  @Column()
  commercialName: string;

  @Column()
  activePrinciple: string;

  @ManyToOne(() => Pet, (pet) => pet.vaccines)
  pet: Pet;
}
