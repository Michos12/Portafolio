import { Project } from "../models/projects.js";

async function createProjectService(name, description, tech, demo, code, image){
 const newProject = new Project({
    name: name,
    description: description,
    tech: tech,
    demo: demo,
    code: code,
    image: image
});
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