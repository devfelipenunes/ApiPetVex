// pet.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { PetDto } from './pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  async create(petData: PetDto): Promise<Pet> {
    const newPet = this.petRepository.create(petData);
    return await this.petRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }

  // async update(id: number, petData: Pet): Promise<Pet> {
  //   await this.petRepository.update(id, petData);
  //   return this.petRepository.findOne(id);
  // }
}
