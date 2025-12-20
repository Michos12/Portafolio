import { createProfileService, getProfileService, updateProfileService, deleteProfileService } from "../Services/profileDataService.js"
import { existsValidator } from "../validators/projectValidator.js";

function createProfileController(req, res){
    try{
        const { name, role, location, email, linkedln, github, resumeUrl, about } =  req.body;
        createProfileService(name, role, location, email, linkedln, github, resumeUrl, about);
        res.status(201).json({ success: true });
    } catch(error){
      res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function updateProfileController(req, res){
    try{
        updateProfileService(req.params.id, req.body).then(updateData => {
            existsValidator(
                updateData,
                (res.status(200).json(updateData)),
                (res.status(404).json({ error: "Not found" }))
            )
        });
    } catch(error){
      res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function deleteProfileController(req, res){
    try{
        deleteProfileService(req.params.id).then( objective => {
            existsValidator(
                objective,
                (res.status(200).json({ message: "Deleted successfully" })),
                (res.status(404).json({ error: "Not found" }))
            )});
    } catch(error){
      res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function getProfileController(req, res){
    try{
        getProfileService().then(data => res.status(200).json(data));
    } catch(error){
      res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

export { updateProfileController, createProfileController, deleteProfileController, getProfileController }