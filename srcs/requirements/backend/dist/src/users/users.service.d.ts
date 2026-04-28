import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(username: string, email: string, password?: string): Promise<{
        id: number;
        username: string;
        email: string;
        avatarUrl: string;
        language: import(".prisma/client").$Enums.Language;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string, incPass: boolean): Promise<{
        id: number;
        username: string;
        email: string;
        passwordHash: string;
        avatarUrl: string;
        language: import(".prisma/client").$Enums.Language;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(id: number): Promise<{
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
