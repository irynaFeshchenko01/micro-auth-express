import { Router } from "express";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

const userRoutes = Router();
const service = new UserService(UserRepository);
const controller = new UserController(service);

userRoutes.get('/', controller.getUsers)
userRoutes.get('/:id', controller.getUser)
userRoutes.post('/', controller.createUser)

export default userRoutes;