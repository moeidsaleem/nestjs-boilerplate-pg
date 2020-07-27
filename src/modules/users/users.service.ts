import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from './user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './users.repository';

export type UserList = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectRepository(User) private readonly repo: UserRepository) {
  }


  async createUser(user: User){
    return await this.repo.createUser(user)

  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.repo.findUser(id)
  }

  async findByEmail(email:string): Promise<User | undefined> {
    return await this.repo.findByEmail(email);
  }


public async getAll() : Promise<UserList | undefined>{
  // return await this.repo
  return await this.repo.find()
  
}



}