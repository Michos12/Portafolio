import express from "express"
import { updateProjectController, createProjectController, deleteProjectController, getProjectController } from "../Controller/projectController.js"

const projectRouter = express.Router();

projectRouter.route("/")
.get(getProjectController)
.post(createProjectController)

projectRouter.route("/:id")
.patch(updateProjectController)
.delete(deleteProjectController)

export { projectRouter }