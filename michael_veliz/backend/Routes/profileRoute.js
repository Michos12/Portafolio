import express from "express";
import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "./Controller/profileController.js";

const profileRouter = express.Router();

profileRouter.route("/")
.get(getProfileController(req, res))
.post(createProfileController(req, res))

profileRouter.route("/:id")
.patch(updateProfileController(req, res))
.delete(deleteProfileController(req, res))

export { profileRouter }