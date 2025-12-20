import { deleteSkillFieldService, updateSkillFieldService, getSkillFieldService, createSkillFieldService } from "../Services/skillFieldService.js"
import { existsValidator } from "../validators/projectValidator.js";

function createSkillFieldController(req, res){
    try{
        const { skills, field } = req.body;
        const newData = createSkillFieldService(skills, field)
        res.status(200).json(newData);
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function deleteSkillFieldController(req, res){
    try{
        deleteSkillFieldService(req.params.id).then(objective => {
            existsValidator(
                objective,
                (res.status(200).json({ success: true })),
                (res.status(404).json({ error: "Not found" }))
            )
        });
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function updateSkillFieldController(req, res){
    try{
        updateSkillFieldService(req.params.id, req.body).then(updataData => {
            existsValidator(
                updataData,
                (res.status(200).json(updataData)),
                (res.status(404).json({ error: "Not found" }))
            )
        });
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function getSkillFieldController(req, res){
    try{
        getSkillFieldService().then(data => {
            res.status(200).json(data);
        })
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

export { getSkillFieldController, deleteSkillFieldController, updateSkillFieldController, createSkillFieldController }