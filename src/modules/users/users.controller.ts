import { Controller, UseGuards, Get, Request, Post, Body, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(@Request() req) {
   return await this.usersService.getAll();

  }

  @Post()
  async createUser(@Body() data){
    Logger.log(data);
    return await this.usersService.createUser(data);

  }
  



}
