import express from "express";
import { deleteMessageController, getMessageController, updateMessageController, createMessageController } from "./Controller/messageController.js";

const messageRouter = express.Router();

messageRouter.route("/")
.get(getMessageController(req, res))
.post(createMessageController(req, res));

messageRouter.route("/:id")
.patch(updateMessageController(req, res))
.delete(deleteMessageController(req, res));

export { messageRouter }