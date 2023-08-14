// pets.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TutorService } from './tutor.service';
import { TutorDto } from './tutor.dto';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly tutorService: TutorService) {}

  //   @Put(':id')
  //   update(@Param('id') id: number, @Body() tutorData: TutorDto) {
  //     return this.tutorService.update(id, tutorData);
  //   }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tutorService.remove(id);
  }

  @Get()
  findAll() {
    return this.tutorService.findAll();
  }

  @Post()
  create(@Body() tutorData: TutorDto) {
    return this.tutorService.create(tutorData);
  }
}
