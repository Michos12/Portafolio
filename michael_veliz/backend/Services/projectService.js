import { Project } from "../models/projects";

async function createProjectService(name, description, tech, demo, code, image){
 const newProject = new Project(name, description, tech, demo, code, image);
 await newProject.save()
}

async function getProjectService(){
    const data = await Project.find();
    return data
}

async function deleteProjectService(id){
    const objective = await Project.findByIdAndDelete(id);
    return objective
}

async function updateProjectService(id, body){
    const updateData = await Project.findByIdAndUpdate(id, body, { new: true })
    return updateData
}

export { createProjectService, getProjectService, deleteProjectService, updateProjectService }