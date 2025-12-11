import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Project name is required'] },
    description: { type: String, required: [true, 'Project description is required'] },
    tech: { type: [String], required: [true, 'Project tech stack is required'] },
    demo: { type: String },
    code: { type: String },
    image: { type: String }
})

const Project = mongoose.model('Project', projectSchema);

export { Project };