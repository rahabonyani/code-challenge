import express from "express";
import { registerAndLogin } from "../../controllers/authConttrollers";

export const authRouter = express.Router();

authRouter.post("/registerAndLogin", registerAndLogin);
