import Profile from "../models/profile.js"

async function createProfileService(name, role, location, email, linkedin, github, resumeUrl, about){
    const newData = new Profile(name, role, location, email, linkedin, github, resumeUrl, about);
    await newData.save()
}

async function getProfileService(){
    const data = await Profile.find()
    return data
}

async function updateProfileService(id, body){
    const updateData = await Profile.findByIdAndUpdate(
        id, 
        body,
        { new: true }
    )
    return updateData
}

async function deleteProfileService(id){
    const objective = await Profile.findByIdAndDelete(id);
    return objective
}

export { createProfileService, getProfileService, updateProfileService, deleteProfileService }