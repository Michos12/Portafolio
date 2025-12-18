import SkillField from "../models/skillField";

async function createSkillFieldService(skills, field){
    const newSkillField = new SkillField(skills, field);
    await newSkillField.save()
}

async function getSkillFieldService(){
    const skills = await SkillField.find();
    return skills
}

async function updateSkillFieldService(id, body){
    const updateData = await SkillField.findByIdAndUpdate(
        id,
        body,
        { new: true }
    );
    return updateData
}

async function deleteSkillFieldService(id){
    const objective = await SkillField.findByIdAndDelete(id)
    return objective
}

export { deleteSkillFieldService, updateSkillFieldService, getSkillFieldService, createSkillFieldService }