import { AppError } from "../../common/error/app-error";
import { ErrorCode } from "../../common/error/error.enum";
import { ResponseUserDto } from "../../dto/response-user.dto";
import { CreateUserDto } from "../../dto/user.dto";
import { User } from "../../entities/user";
import { toUserDto } from "./user.mapper";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepo: typeof UserRepository) {}

  async findAll(): Promise<ResponseUserDto[]> {
    let users: User[] = await this.userRepo.getAll();

    if (!users) {
      throw new AppError("User not found", 404, ErrorCode.USER_NOT_FOUND);
    }

    return users.map(toUserDto);
  }

  async getUserById(id: number): Promise<ResponseUserDto> {
    const user = await this.userRepo.getUser(id);
    if (!user) {
      throw new AppError("User not found", 404, ErrorCode.USER_NOT_FOUND);
    }

    return toUserDto(user);
  }

  async createUser(dto: CreateUserDto): Promise<any> {
    const user = await UserRepository.createWithRoles(dto);
    if (!user) {
      throw new AppError("User creation faled", 404, ErrorCode.USER_NOT_FOUND);
    }

    return toUserDto(user);
  }
}
