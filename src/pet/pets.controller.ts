// pets.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() petData: PetDto) {
    return this.petService.create(petData);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petService.remove(id);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() petData: Pet) {
  //   return this.petService.update(id, petData);
  // }
}
