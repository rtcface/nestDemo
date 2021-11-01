import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// using the UsersService to get the user


@Injectable()
export class AuthService {
    
    constructor(private readonly usersService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByMail(username);
        if (user && user.pass === pass) {
            const { pass, ...result } = user;
            return result;
        }
        return null;
    }

}

