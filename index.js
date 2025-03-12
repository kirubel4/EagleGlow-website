import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let lan;
async function loadLanguage() {
    try {
        const languageFileUrl = pathToFileURL(join(__dirname, 'language.js')).href;
        lan = await import(languageFileUrl);
    } catch (error) {
        console.error("Failed to import language.js:", error);
    }
}
await loadLanguage();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const de = process.env;
const db = new Pool({
    user: de.DB_USER,
    host: de.DB_HOST,
    database: de.DB_NAME,
    password: de.DB_PASSWORD,
    port: de.DB_PORT,
    max: 10,  // Maximum number of connections in the pool (adjust as needed)
    idleTimeoutMillis: 30000,  // Time before an idle connection is closed
    connectionTimeoutMillis: 2000,  // Time to wait for a connection before throwing an error
});

try {
    db.connect();
    console.log('Connected to the database');
} catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
}


app.get("/", (req,res)=>{
    res.render("home",{ language: "english" ,  cssFile: "style.css" });
});

app.get('/home', (req, res) => res.redirect('/'));

app.get("/about", (req, res) => {
    res.render("about", { language: "english", cssFile: "about.css" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { language: "english", cssFile: "contact.css" });
});

app.get("/classes", (req, res) => {
    res.render("classes", { language: "english", cssFile: "classes.css" });
});

app.get("/schedules", (req, res) => {
    res.render("schedules", { language: "english", cssFile: "schedules.css" });
});

app.get("/register", (req, res) => {
    res.render("register", { language: "english", cssFile: "register.css" });
});



app.post("/register", async (req, res) => { 
    console.log("🚀 /register route hit!", req.body);

    if (!req.body.name) {
        return res.status(400).send("No data received or missing 'name' field.");
    }
    const con = req.body;
    const data = {
        name: con.name,
        phoneNumber: con.phoneNumber,
        dob: con.dob,
        currentLevel: con.level,
        sex: con.sex,
        emergency_phone: con.emergency_phone,
        family_name: con.family_name
    };
        // Ensure you already have a client instance from earlier connection
        const client = db; // Assuming `db` is already your connected client

    try {
        
        // Begin transaction
        await client.query('BEGIN');

        console.log('Checking if user already exists...');
        const result = await client.query("SELECT * FROM students WHERE name = $1", [data.name]);
        console.log('Query result:', result.rows);

        if (result.rows.length > 0) {
            await client.query('ROLLBACK'); // Rollback on conflict (if user exists)
            return res.status(409).send("YOU HAVE ALREADY REGISTERED!!!");
        }

        const insertResult = await client.query(
            `INSERT INTO students (name, date_of_birth, phone, sex, emergency_phone, family_name, current_level) 
             VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
            [data.name, data.dob, data.phoneNumber, data.sex, data.emergency_phone, data.family_name, data.currentLevel]
        );
        
        console.log('✅ Insert result:', insertResult.rows[0]); 
        await client.query('COMMIT'); // Commit the transaction if successful
        res.status(201).send("Registration successful!");

    } catch (error) {
        console.error('❗ Error occurred:', error);
        await client.query('ROLLBACK'); // Rollback if there's an error
        await client.query(
            `SELECT setval('students_id_seq', (SELECT MAX(id) FROM students))`
        );
        res.status(500).send("An error occurred during registration.");
    } finally {
        // Release or close the client if needed (depending on how `db` is handled)
        // e.g., if using connection pooling, you may not need to manually release
        client.release();
    }
});


app.post('*', async function (req, res, next) {
    const referer = req.get('referer') || '/';
    try {
        lan.changeLanguage(referer);
        res.redirect(referer);
    } catch (error) {
        next(error);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
