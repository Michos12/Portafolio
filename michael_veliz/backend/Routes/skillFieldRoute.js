import express from "express"
import { getSkillFieldController, deleteSkillFieldController, updateSkillFieldController, createSkillFieldController } from "../Controller/skillFieldController.js"

const skillFieldRouter = express.Router();

skillFieldRouter.route("/")
.get(getSkillFieldController)
.post(createSkillFieldController)

skillFieldRouter.route("/:id")
.patch(updateSkillFieldController)
.delete(deleteSkillFieldController)

export { skillFieldRouter }