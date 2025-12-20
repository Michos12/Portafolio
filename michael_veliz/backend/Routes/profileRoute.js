import express from "express";
import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "../Controller/profileController.js";

const profileRouter = express.Router();

profileRouter.route("/")
.get(getProfileController)
.post(createProfileController)

profileRouter.route("/:id")
.patch(updateProfileController)
.delete(deleteProfileController)

export { profileRouter }