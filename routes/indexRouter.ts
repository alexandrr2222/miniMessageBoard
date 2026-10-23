import { Router } from "express";
import { renderMessageBoard } from "../controllers/indexController";

export const indexRouter = Router();

indexRouter.get("/", renderMessageBoard);
