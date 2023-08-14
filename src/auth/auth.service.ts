// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOrCreateUser(profile: any): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { googleId: profile.id },
    });

    if (!user) {
      const newUser = new User();
      newUser.googleId = profile.id;
      newUser.email = profile.emails[0].value;

      return await this.userRepository.save(newUser);
    }

    return user;
  }
}
