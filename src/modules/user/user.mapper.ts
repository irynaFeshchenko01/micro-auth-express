import { ResponseUserDto } from "../../dto/response-user.dto";
import { User } from "../../entities/user";

export const toUserDto = (user: User): ResponseUserDto => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  isActive: user.isActive,
  email: user.email,
  phone: user.phone,
  roles: user.roles?.map((r) => r.id) ?? [],
});
