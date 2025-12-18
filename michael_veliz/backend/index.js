import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URL, PORT } from "./env.js";
import { projectRouter } from "./Routes/projectRoute.js";
import { contactRouter } from "./Routes/contactRoute.js";
import { messageRouter } from "./Routes/messageRoute.js";
import { skillFieldRouter } from "./Routes/skillFieldRoute.js";
import { profileRouter } from "./Routes/profileRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

// ---- MongoDB Atlas Connection ----
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Route Handler for contacts requests
app.use("/api/contact", contactRouter)

// Route Handler for projects requests
app.use("/api/project", projectRouter)

// Route Handler for message requests
app.use("/api/message", messageRouter)

// Route Handler for skillss requests
app.use("/api/skillfield", skillFieldRouter)

// Route Handler for profile requests
app.use("/api/profile", profileRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  