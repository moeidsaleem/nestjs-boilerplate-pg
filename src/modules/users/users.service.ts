import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from './user.entity';
import { Repository } from 'typeorm';

export type UserList = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {
  }

  async findOne(email: string): Promise<UserList | undefined> {
    return this.repo.find()
  }


public async getAll(){
  // return await this.repo
}



}