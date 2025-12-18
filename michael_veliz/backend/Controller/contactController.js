import { createContactService, getContactService, deleteContactService, updateContactService } from "./backend/Services/contactService.js"

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
        const data = getContactService()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message })
    }
}

function deleteContactController(req, res){
    try{
        const objective = deleteContactService();
        if(!objective){
            return res.status(404).json({ error: "Not found" })
        }
        res.status(200).json({ success: true })
    } catch (error){
        res.status(500).json({ error: `Server error: ${error.message}`})
    }
}

function updateContactController(req, res){
   try{
        const updateData = updateContactService();
        if(!updateData){
            return res.status(404).json({ error: "Not found"})
        }
        res.status(200).json(updateData)
   } catch (error){
        res.status(500).json({ error: `Server error: ${error.message}`})
   } 
}

export {updateContactController, deleteContactController, getContactController, createContactController}