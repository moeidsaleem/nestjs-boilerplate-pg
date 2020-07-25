import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: UserDto) => {
    return await this.save(userDto);
  };

  getUsers = async (id) => {
    return await this.findOne(id)
  }

}