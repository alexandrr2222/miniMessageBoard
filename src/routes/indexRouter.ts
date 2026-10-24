import { Router } from "express";
import { renderMessageBoard } from "../controllers/indexController";
import { formController, nameController } from "../controllers/indexController";

export const indexRouter = Router();

indexRouter.get("/", renderMessageBoard);
indexRouter.post("/newpost", formController);
indexRouter.post("/username", nameController);
