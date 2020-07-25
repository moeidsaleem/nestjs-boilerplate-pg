import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   name: string;

   @Column()
   password: string;


   @Column()
   email: string;

   @Column()
   age: number;

   // @Column({length: 100, nullable: true})
   // breed: string;
}