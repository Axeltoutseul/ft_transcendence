import { AuthService } from './auth.service';
import { SafeUser } from '../common/types';
import { RegisterDto, LoginDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        id: number;
        username: string;
        email: string;
        avatarUrl: string;
        language: import(".prisma/client").$Enums.Language;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(body: LoginDto): Promise<{
        access_token: string;
    }>;
    me(user: SafeUser): SafeUser;
    logout(): {
        message: string;
    };
}
