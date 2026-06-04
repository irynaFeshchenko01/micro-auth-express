import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export const AuthController = {
  logIn: (_req: Request, res: Response) => {
    res.json(AuthService.logIn());
  },

  logOut: (_req: Request, res: Response) => {
    res.status(201).json(AuthService.logOut());
  },
};