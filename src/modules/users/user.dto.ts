import { UserRoleEnum } from "./user-roles.enum";

export class UserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRoleEnum;
    readonly age: number;
    readonly mobile: string;
    readonly emailVerified: boolean;
    readonly phoneVerified: boolean;
    readonly isActive: boolean;
}