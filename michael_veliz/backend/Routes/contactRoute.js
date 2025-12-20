import { updateContactController, deleteContactController, createContactController, getContactController } from "../Controller/contactController.js";
import express from "express"

const contactRouter = express.Router();

contactRouter.route("/")
.get(getContactController)
.post(createContactController);

contactRouter.route("/:id")
.patch(updateContactController)
.delete(deleteContactController);

export { contactRouter }