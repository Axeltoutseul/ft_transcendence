import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(username: string, email: string, password: string): Promise<{
        id: number;
        username: string;
        email: string;
        avatarUrl: string;
        language: import(".prisma/client").$Enums.Language;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    validateUser(userId: number): Promise<{
        id: number;
        username: string;
        email: string;
        avatarUrl: string;
        language: import(".prisma/client").$Enums.Language;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
