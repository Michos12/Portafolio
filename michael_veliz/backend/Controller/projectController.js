import { createProjectService, getProjectService, deleteProjectService, updateProjectService } from "../Services/projectService.js"
import { existsValidator } from "../validators/projectValidator.js";

function createProjectController(req, res){
    try{
        const { name, description, tech, demo, code, image } = req.body;
        createProjectService(name, description, tech, demo, code, image);
        res.status(201).json({ sucess: true })
    } catch(error){
        res.status(500).json({ error: `Server Error: ${error.message}`})
    }
}

function getProjectController(req, res){
    try{
        getProjectService().then(data => {
            res.status(200).json(data)
        });
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}`})
    }
}

function deleteProjectController(req, res){
    try{
        deleteProjectService(req.params.id).then(objective => {
            existsValidator(
                objective,
                (res.status(200).json({ success: true })),
                (res.status(404).json({ error: "Not found"}))        
            )
        });
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}`})
    }
}

function updateProjectController(req, res){
    try{
        updateProjectService(req.params.id, req.body).then(updateData => {
            existsValidator(
                updateData,
                (res.status(200).json(updateData)),
                (res.status(404).json({ error: "Not found"}))
            )
        });
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

export { updateProjectController, createProjectController, deleteProjectController, getProjectController }