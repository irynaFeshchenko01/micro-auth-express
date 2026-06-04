import { Router } from 'express';
import { AuthController } from './auth.controller';

const authRouter = Router();

authRouter.get('/login', AuthController.logIn);
authRouter.get('/logout', AuthController.logOut);``

export default authRouter;