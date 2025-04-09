// server/services/studentService.js

import pool from '../db.js'; // Assuming you have your DB pool in a separate file

// Register a student
export async function registerStudent(studentData) {
    try {
        const { name, phoneNumber, dob, currentLevel, sex, emergency_phone, family_name } = studentData;

        // Start transaction
        const client = await pool.connect();
        await client.query('BEGIN');

        // Check if student already exists
        const result = await client.query("SELECT * FROM students WHERE name = $1", [name]);
        if (result.rows.length > 0) {
            await client.query('ROLLBACK');
            throw new Error('Student already exists!');
        }

        // Insert student data
        const insertResult = await client.query(
            `INSERT INTO students (name, date_of_birth, phone, sex, emergency_phone, family_name, current_level) 
             VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [name, dob, phoneNumber, sex, emergency_phone, family_name, currentLevel]
        );

        // Commit transaction
        await client.query('COMMIT');
        return insertResult.rows[0]; // Returning inserted data
    } catch (error) {
        throw new Error(`Error during registration: ${error.message}`);
    }
}
