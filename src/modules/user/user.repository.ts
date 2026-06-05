import argon2 from "argon2";
import { In } from "typeorm";
import { AppDataSource } from "../../config/db.config";
import { Role } from "../../entities/role";
import { User } from "../../entities/user";
import { CreateUserDto } from "../../dto/user.dto";

export const UserRepository = AppDataSource.getRepository(User).extend({
  async getAll(): Promise<User[]> {
    return this.find({
      relations: {
        roles: true,
      },
    });
  },

  async getUser(id: number): Promise<User | null> {
    return this.findOne({
      where: { id },
      relations: {
        roles: true,
      },
    });
  },

  async createWithRoles(dto: CreateUserDto): Promise<User> {
    const roles = await AppDataSource.getRepository(Role).find({
      where: { id: In(dto.roleIds) },
    });

    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    const user: User = this.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      isActive: dto.isActive,
      email: dto.email,
      passwordHash: passwordHash,
      phone: dto.phone,
      roles,
    });

    return this.save(user);
  },
});
