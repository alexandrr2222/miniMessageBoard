import { messages } from "../models/messageExamples";
import type { Request, Response } from "express";

export function renderMessageBoard(req: Request, res: Response) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}
