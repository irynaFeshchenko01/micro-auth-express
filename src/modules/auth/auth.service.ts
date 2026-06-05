import argon2 from "argon2";
import { AppError } from "../../common/error/app-error";
import { ErrorCode } from "../../common/error/error.enum";
import { LoginDto } from "../../dto/login.dto";
import { ResponseUserDto } from "../../dto/response-user.dto";
import { toUserDto } from "../user/user.mapper";
import { AuthRepository } from "./auth.repository";

export class AuthService {
  constructor(private readonly authRepo: typeof AuthRepository) {}

  async login(data: LoginDto): Promise<ResponseUserDto> {
    const user = await this.authRepo.logIn(data.email);
    if (!user) {
      throw new AppError("User not found", 404, ErrorCode.USER_NOT_FOUND);
    }

    let passwordVerfied = await argon2.verify(
      user.passwordHash ?? "",
      data.password,
    );

    if (!passwordVerfied) {
      throw new AppError("Invalid password", 401, ErrorCode.INVALIDE_PASSWORD);
    }

    return toUserDto(user);
  }
}
