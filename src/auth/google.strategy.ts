// auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID:
        '959223819936-kcaaf5gud9lacv2jpqlaam45g5as96ta.apps.googleusercontent.com',
      clientSecret: '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',
    //   callbackURL: 'YOUR_CALLBACK_URL',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const user = await this.authService.findOrCreateUser(profile);

    done(null, user);
  }
}
