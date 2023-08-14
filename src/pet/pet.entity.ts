// pet.entity.ts
import { Tutor } from 'src/tutor/tutor.entity';
import { Vaccine } from 'src/vaccine/vaccine.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  race: string;

  @Column()
  microchip: string;

  @Column({ name: 'microchip_date' })
  microchipDate: Date;

  @Column()
  sex: string;

  @Column({ name: 'coat_color' })
  coatColor: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor;

  @OneToMany(() => Tutor, (vaccine) => vaccine.pets)
  vaccines: Vaccine[];
}
