import { updateMessageService, deleteMessageService, getMessageService, createMessageService } from "../Services/messageService.js"
import { existsValidator } from "../validators/projectValidator.js"

function createMessageController(req, res){
    try{
        const { name, email, message } = req.body;
        createMessageService(name, email, message)
    } catch(error){
        res.status(500).json({ error: "Server error" });
    }

}

function getMessageController(req, res){
    try{
        const data = getMessageService();
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

function updateMessageController(req, res){
    try{
        const updateData = updateMessageService(req.params.id, req.body);
        existsValidator(
            updateData,
            (res.status(200).json(updateData)),
            (res.status(404).json({ error: "Not found"}))
        )
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });

    }
}

function deleteMessageController(req, res){
    try{
        const objective = deleteMessageService(req.params.id);
        existsValidator(
            objective,
            (res.status(200).json({ success: true })),
            (res.status(404).json({ error: "Not found" }))
        );
    } catch(error){
        res.status(500).json({ error: `Server error: ${error.message}` });
    }
}

export { deleteMessageController, createMessageController, updateMessageController, getMessageController }