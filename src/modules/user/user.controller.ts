import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private readonly service: UserService) {}

  getUsers = async (_req: Request, res: Response): Promise<void> => {
    const users = await this.service.findAll();
    res.json(users);
  };

  getUser = async (req: Request, res: Response): Promise<void> => {
    const users = await this.service.getUserById(Number(req.params.id));
    res.json(users);
  };

  createUser = async (req: Request, res: Response): Promise<void> => {
    const users = await this.service.createUser(req.body);
    res.json(users);
  };
}
