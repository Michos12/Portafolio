import express from "express"
import { updateProjectController, createProjectController, deleteProjectController, getProjectController } from "../Controller/projectController.js"

const projectRouter = express.Router();

projectRouter.route("/")
.get(getProjectController(req, res))
.post(createProjectController(req, res))

projectRouter.route("/:id")
.patch(updateProjectController(req, res))
.delete(deleteProjectController(req, res))

export { projectRouter }