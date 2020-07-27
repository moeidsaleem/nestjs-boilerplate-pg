/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: any) => {
    return await this.save(userDto);
  };

  updateUser = async (id, data: any) => {
    return await this.update(id, data)
  };

  findUser = async(id:any) => {
    return await this.findOne(id);
  }

  findByEmail = async(email:string) => {
    return await this.findOne({email: email})
  }


  findAll = async (userDto:UserDto) => {
    return await this.find();
  }



}