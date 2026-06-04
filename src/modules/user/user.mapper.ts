import { ResponseUserDto } from "../../dto/response-user.dto";
import { User } from "../../entities/user";

export const toUserDto = (user: User): ResponseUserDto => ({
  ...user,
  roles: user.roles?.map((r) => r.id) ?? [],
});

