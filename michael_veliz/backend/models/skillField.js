import mongoose from "mongoose";

const skillFieldSchema = new mongoose.Schema({
    field: { type: String },
    skills: { type: [String] }
});

const SkillField = mongoose.model("SkillField", skillFieldSchema);

export default SkillField;