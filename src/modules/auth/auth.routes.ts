import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

const authRouter = Router();
const service = new AuthService(AuthRepository);
const controller = new AuthController(service);

authRouter.post('/login', controller.login);

export default authRouter;