import { AppDataSource } from "../../config/db.config";
import { User } from "../../entities/user";

export const AuthRepository = AppDataSource.getRepository(User).extend({
  async logIn(email: string): Promise<User | null> {
    return this.findOne({
      where: { email },
      relations: {
        roles: true,
      },
    });
  },
});
