import express from "express"
import { getSkillFieldController, deleteSkillFieldController, updateSkillFieldController, createSkillFieldController } from "./Controller/skillFieldController.js"

const skillFieldRouter = express.Router();

skillFieldRouter.route("/")
.get(getSkillFieldController(req, res))
.post(createSkillFieldController(req, res))

skillFieldRouter.route("/:id")
.patch(updateSkillFieldController(req, res))
.delete(deleteSkillFieldController(req, res))

export { skillFieldRouter }