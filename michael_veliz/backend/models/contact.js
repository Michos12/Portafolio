import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please provide your name'] },
    email: { type: String, required: [true, 'Please provide your email'] },
    message: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

export { Contact };