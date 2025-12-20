import { createContactService, getContactService, deleteContactService, updateContactService } from "../Services/contactService.js"
import { existsValidator } from "../validators/projectValidator.js";

function createContactController(req, res){
    try {
        const { name, email, message } = req.body
        createContactService(name, email, message);
        res.status(201).json({ success: true });
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}

function getContactController(req, res){
    try{
        getContactService().then(data => {
            res.status(200).json(data);
        })
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message })
    }
}

function deleteContactController(req, res){
    try{
        deleteContactService().then(objective => {
            existsValidator(
                objective,
                res.status(200).json({ success: true }),
                res.status(404).json({ error: "Not found" })
            )});
    } catch (error){
        res.status(500).json({ error: `Server error: ${error.message}`})
    }
}

function updateContactController(req, res){
   try{
        updateContactService().then(updateData => {
            existsValidator(
                updateData,
                res.status(200).json(updateData),
                res.status(404).json({ error: "Not found"})
            )});
   } catch (error){
        res.status(500).json({ error: `Server error: ${error.message}`})
   } 
}

export {updateContactController, deleteContactController, getContactController, createContactController}