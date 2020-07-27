import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRoleEnum } from './user-roles.enum';

enum Gender {
   Male = 'male',
   Female = 'female',
   Other = 'other'
 }

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   firstName: string;

   @Column({length: 50})
   lastName: string;

   @Column({unique:true, length:50})
   email: string;

   @Column({unique:true, length:30})
   phone: string;

   @Column('text')
    gender: Gender

    @Column()
    role: UserRoleEnum;

   @Column()
   emailVerified: boolean;

   @Column()
   phoneVerified: boolean;
   
   @Column()
   password: string;

   @Column()
   age: number;


   // @Column({length: 100, nullable: true})
   // breed: string;
}