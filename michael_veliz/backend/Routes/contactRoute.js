import { updateContactController, deleteContactController, createContactController, getContactController } from "./Controller/contactController.js";
import express from "express"

const contactRouter = express.Router();

contactRouter.route("/")
.get(getContactController(req, res))
.post(createContactController(req, res));

contactRouter.route("/:id")
.path(updateContactController(req, res))
.delete(deleteContactController(req, res));

export { contactRouter }