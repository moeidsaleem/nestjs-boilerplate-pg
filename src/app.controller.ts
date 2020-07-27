import { Controller, Get, Post,Request, UseGuards, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { AuthService } from './modules/auth/auth.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}


  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }



  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   Logger.log('ye wala profile hai')
  //   return req.user;
  // }

}
