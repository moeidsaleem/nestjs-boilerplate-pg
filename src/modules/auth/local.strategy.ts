

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { exception } from 'console';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if(user && user === 'password-error'){
      Logger.log('WRONG PASSWORD!!! ')
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Wrong Password! Please Enter Correct Password.',
      }, HttpStatus.FORBIDDEN)
   
    }
    Logger.log('mai chalaa hun ')
    if (!user || user === 'no-user') {
      throw new UnauthorizedException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'User does not exist.'
        });
    } 
    return user;
  }
}