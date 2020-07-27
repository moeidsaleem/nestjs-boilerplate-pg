/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  UseGuards,
  Get,
  Request,
  Post,
  Body,
  Logger,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    Logger.log('ye wala profile hai');
    return req.user;
  }

  @Post('signup')
  async signUp(@Body() data) {
    const response = await this.authService.signUp(data);
    if (response) {
      return {
        status: 200,
        message: 'User Created.',
      };
    }
  }

  // @Post('refreshToken')
  // async refreshToken(){

  // }

  // @Post('forgotpassword')
  // async forgotPassword(){

  // }
  //   @UseGuards(JwtAuthGuard)
  //   @Get()
  //   async getUsers(@Request() req) {
  //    return await this.usersService.getAll();

  //   }

  //   @Post()
  //   async createUser(@Body() data){
  //     Logger.log(data);
  //     return await this.usersService.createUser(data);

  //   }
}
