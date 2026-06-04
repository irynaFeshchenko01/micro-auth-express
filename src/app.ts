import express from "express";
import authRouter from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import { errorHandler } from "./common/middleware/error-handler.middleware";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRoutes);

app.use(errorHandler);

export default app;
