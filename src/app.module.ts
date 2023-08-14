import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet/pet.entity';
import { PetsController } from './pet/pets.controller';
import { PetService } from './pet/pet.service';
import { Tutor } from './tutor/tutor.entity';
import { TutorsController } from './tutor/tutors.controller';
import { TutorService } from './tutor/tutor.service';
import { Vaccine } from './vaccine/vaccine.entity';
import { VaccinesController } from './vaccine/Vacinnes.controller';
import { VaccineService } from './vaccine/vaccine.service';
import { User } from './auth/user.entity';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: [Pet, Tutor, Vaccine, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pet, Tutor, Vaccine, User]),
  ],
  controllers: [PetsController, TutorsController, VaccinesController],
  providers: [
    PetService,
    TutorService,
    VaccineService,
    GoogleStrategy,
    AuthService,
  ],
})
export class AppModule {}
