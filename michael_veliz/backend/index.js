import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URL, PORT } from "./env.js";
import { updateContactController, deleteContactController, createContactController, getContactController } from "./Controller/contactController.js";
import { deleteMessageController, getMessageController, updateMessageController, createMessageController } from "./Controller/messageController.js";
import { getSkillFieldController, deleteSkillFieldController, updateSkillFieldController, createSkillFieldController } from "./Controller/skillFieldController.js"
import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "./Controller/profileController.js";
import { createProfileService } from "./Services/profileDataService.js";

const app = express();
app.use(cors());
app.use(express.json());

// ---- MongoDB Atlas Connection ----
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// POST Contact
app.post("/api/contact", createContactController(req, res));

// GET Contact
app.get("/api/contact", getContactController(req, res));

// DELETE Contact
app.delete("/api/contact/:id", deleteContactController(req, res));

// PATCH Contact
app.patch("/api/contact/:id", updateContactController(req, res));

// POST Project
app.post("/api/project", createContactController(req, res));

// GET Project
app.get("/api/project", getContactController(req, res));

// DELETE Project
app.delete("/api/project/:id", deleteContactController(req, res));

// PATCH Project
app.patch("/api/project/:id", updateContactController(req, res));

// POST Message
app.post("/api/message", createMessageController(req, res));

// GET Message
app.get("/api/message", getMessageController(req, res));

// DELETE Message
app.delete("/api/message/:id", deleteMessageController(req, res));

// PATCH Message
app.patch("/api/message/:id", updateMessageController(req, res));

// GET SkillField
app.get("/api/skillfield", getSkillFieldController(req, res));

// POST SkillField
app.post("/api/skillfield", createSkillFieldController(req, res));

// PATCH SkillField
app.patch("/api/skillfield/:id", updateSkillFieldController(req, res));

// DELETE SkillField
app.delete("/api/skillfield/:id", deleteSkillFieldController(req, res));

// POST PROFILE DATA
app.post("/api/profile", createProfileController(req, res));

// GET PROFILE DATA
app.get("/api/profile", getProfileController(req, res));

// PATCH PROFILE DATA
app.patch("/api/profile/:id", updateProfileController(req, res));

// DELETE PROFILE DATA
app.delete("/api/profile/:id", deleteProfileController(req, res));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  