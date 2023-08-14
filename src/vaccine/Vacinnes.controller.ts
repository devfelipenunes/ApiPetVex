import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineDto } from './vaccine.dto';

@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  create(@Body() vacinaData: VaccineDto) {
    return this.vaccineService.create(vacinaData);
  }

  @Get()
  findAll() {
    return this.vaccineService.findAll();
  }

  //   @Put(':id')
  //   update(@Param('id') id: number, @Body() vacinaData: VaccineDto) {
  //     return this.vaccineService.update(id, vacinaData);
  //   }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vaccineService.remove(id);
  }
}
