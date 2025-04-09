// server/controllers/studentController.js

import { registerStudent } from '../services/studentService.js';

// Register route
export async function registerStudentHandler(req, res) {
    try {
        const studentData = req.body;
        const student = await registerStudent(studentData);
        res.status(201).json({ message: 'Registration successful', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
