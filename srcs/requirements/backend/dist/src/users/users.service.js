"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(username, email, password) {
        const exists = await this.prisma.user.findFirst({
            where: { OR: [{ email }, { username }] },
        });
        if (exists) {
            throw new common_1.ConflictException('USER_ALREADY_EXISTS');
        }
        const passwordHash = password ? await bcrypt.hash(password, 10) : null;
        return this.prisma.user.create({
            data: { username, email, passwordHash },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                language: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findByEmail(email, incPass) {
        return this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                username: true,
                email: true,
                passwordHash: incPass,
                avatarUrl: true,
                language: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                language: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map