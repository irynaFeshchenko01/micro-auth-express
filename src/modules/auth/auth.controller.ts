import { Request, Response } from "express";
import { AuthService } from './auth.service';

export class AuthController {
  constructor(private readonly service: AuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    const user = await this.service.login(req.body);
    res.json(user);
  };
}
