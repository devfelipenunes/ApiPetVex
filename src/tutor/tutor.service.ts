import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tutor } from "./tutor.entity";
import { TutorDto } from "./tutor.dto";

// tutor.service.ts
@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepository: Repository<Tutor>,
  ) {}

  async create(tutorData: TutorDto): Promise<Tutor> {
    const tutor = this.tutorRepository.create(tutorData);
    return await this.tutorRepository.save(tutor);
  }

  async findAll(): Promise<Tutor[]> {
    return await this.tutorRepository.find();
  }

  // async update(id: number, tutorData: TutorDto): Promise<Tutor> {
  //   await this.tutorRepository.update(id, tutorData);
  //   return this.tutorRepository.findOne(id);
  // }

  async remove(id: number): Promise<void> {
    await this.tutorRepository.delete(id);
  }
}
