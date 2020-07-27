/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialLoginDto } from './auth-credentials.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email:string, pass: string): Promise<any> {
    Logger.log('mai chalaa')
    const user = await this.usersService.findByEmail(email);
    if(!user){
      return 'no-user'
    }
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return {...user};
    }else{
      return 'password-error'
    }
    return null;
  }

  async login(user :AuthCredentialLoginDto) {
    const payload = user;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async signUp(payload:User){
   return await this.usersService.createUser(payload);
  }

  async LoginWithGoogle(payload) {
    return 
  }
  

}