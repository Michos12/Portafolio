import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name: { type: String },
    role: { type: String },
    location: { type: String },
    email: { type: String },
    linkedin: { type: String },
    github: { type: String },
    resumeUrl: { type: String },
    about: { type: String },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;