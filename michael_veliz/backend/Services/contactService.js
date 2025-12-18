import { Contact } from "../models/contact";

async function createContactService(name, email, message){
    const newData = new Contact(name, email, message);
    await newData.save();
}

async function getContactService(){
    const data = await Contact.find();
    return data
}

async function deleteContactService(){
    const objective = await Contact.findByIdAndDelete()
    return objective
}

async function updateContactService(id, body){
    const updateData = await Contact.findByIdAndUpdate(
        id,
        body,
        { new: true }
    )
    return updateData;
}

export { createContactService, getContactService, deleteContactService, updateContactService }