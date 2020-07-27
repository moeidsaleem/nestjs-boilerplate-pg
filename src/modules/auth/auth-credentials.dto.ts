import { UserRoleEnum } from "../users/user-roles.enum";

  
export class AuthCredentialLoginDto{
    
    username:string;
    password:string;
    role: UserRoleEnum;

}
