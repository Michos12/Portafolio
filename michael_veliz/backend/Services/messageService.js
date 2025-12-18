import { Message } from "../models/message";

async function createMessageService(name, email, message){
    const newData = new Message(req.body);
    await newData.save();
}

async function getMessageService(){
    const data = await Message.find();
    return data
}

async function deleteMessageService(id){
    const objective = await Message.findByIdAndDelete(id);
    return objective
}

async function updateMessageService(id, body){
    const updatedData = await Message.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    return updatedData;
}

export { updateMessageService, deleteMessageService, getMessageService, createMessageService }