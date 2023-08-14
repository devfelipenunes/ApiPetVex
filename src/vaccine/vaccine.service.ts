import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vaccine } from "./vaccine.entity";
import { Repository } from "typeorm";
import { VaccineDto } from "./vaccine.dto";

@Injectable()
export class VaccineService {
  constructor(
    @InjectRepository(Vaccine)
    private vacinaRepository: Repository<Vaccine>,
  ) {}

  async create(vacinaData: VaccineDto): Promise<Vaccine> {
    const vacina = this.vacinaRepository.create(vacinaData);
    return await this.vacinaRepository.save(vacina);
  }

  async findAll(): Promise<Vaccine[]> {
    return await this.vacinaRepository.find();
  }

//   async update(id: number, vacinaData: VaccineDto): Promise<Vaccine> {
//     await this.vacinaRepository.update(id, vacinaData);
//     return this.vacinaRepository.findOne(id);
//   }

  async remove(id: number): Promise<void> {
    await this.vacinaRepository.delete(id);
  }
}
