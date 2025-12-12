import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Message } from "./models/message.js";
import { Project } from "./models/projects.js";
import { Contact } from "./models/contact.js";
import SkillField from "./models/skillField.js";
import { MONGO_URL, PORT } from "./env.js";

const app = express();
app.use(cors());
app.use(express.json());

// ---- MongoDB Atlas Connection ----
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// POST Contact
app.post("/api/contact", async (req, res) => {
  try {
    const newData = new Contact(req.body);
    await newData.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET Contact
app.get("/api/contact", async (req, res) => {
  try {
    const datas = await Contact.find();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE Contact
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const objective = await Contact.findByIdAndDelete(req.params.id);
    if (!objective) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH Contact
app.patch("/api/contact/:id", async (req, res) => {
  try {
    const updatedData = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST Project
app.post("/api/project", async (req, res) => {
  try {
    const newData = new Project(req.body);
    await newData.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET Project
app.get("/api/project", async (req, res) => {
  try {
    const datas = await Project.find();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE Project
app.delete("/api/project/:id", async (req, res) => {
  try {
    const objective = await Project.findByIdAndDelete(req.params.id);
    if (!objective) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH Project
app.patch("/api/project/:id", async (req, res) => {
  try {
    const updatedData = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST Message
app.post("/api/message", async (req, res) => {
  try {
    const newData = new Message(req.body);
    await newData.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET Message
app.get("/api/message", async (req, res) => {
  try {
    const datas = await Message.find();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE Message
app.delete("/api/message/:id", async (req, res) => {
  try {
    const objective = await Message.findByIdAndDelete(req.params.id);
    if (!objective) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH Message
app.patch("/api/message/:id", async (req, res) => {
  try {
    const updatedData = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET SkillField
app.get("/api/skillfield", async (req, res) => {
  try{
    const skills = await SkillField.find();
    res.status(200).json(skills);
  } catch (error){
    res.status(500).json({ error: "Server error" });
  }
});

// POST SkillField
app.post("/api/skillfield", async (req, res) => {
  try{
    const newField = new SkillField(req.body);
    await newField.save();
    res.status(201).json({ success: true });
  } catch (error){
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH SkillField
app.patch("/api/skillfield/:id", async (req, res) => {
  try {
    const updatedField = await SkillField.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedField) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(updatedField);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE SkillField
app.delete("/api/skillfield/:id", async (req, res) => {
  try {
    const deletedField = await SkillField.findByIdAndDelete(req.params.id);
    if (!deletedField) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
