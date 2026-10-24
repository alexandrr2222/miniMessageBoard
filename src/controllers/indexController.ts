import { messages } from "../models/messages";
import type { Request, Response } from "express";

let username = "Anonymous";

export function renderMessageBoard(req: Request, res: Response) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

export function formController(req: Request, res: Response) {
  const newMessage = req.body.chatInput;
  messages.push({ text: newMessage, user: username, added: new Date() });
  res.redirect("/");
}

export function nameController(req: Request, res: Response) {
  username = req.body.usernameInput;
  res.redirect("/");
}
