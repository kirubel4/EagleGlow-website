import express from "express";
import { registerStudentHandler } from "../controllers/studentController.js";

const router = express.Router();

// Define the routes
router.post("/register", registerStudentHandler);  // POST request for registering a student

export default router;