import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import ejs from "ejs";
import axios from "axios";
const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "EagleGlow",
    password: "kirag00d",
    port: 5432
});
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Keep this as it's added in new-feature

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("About.ejs");
});

app.get("/contact", (req, res) => {
    res.render("Contact.ejs");
});

app.get("/classes", (req, res) => {
    res.render("Classes.ejs");
});

app.get("/schedules", (req, res) => {
    res.render("Schedules.ejs");
});

app.get("/register", (req, res) => {
    res.render("Schedules.ejs");
});

app.post("/Register", async (req, res) => {
    const data = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        age: req.body.age,
        currentLevel: req.body.level,
        sex: req.body.sex,
        emergency_phone: req.body.emergency_phone,
        family_name: req.body.family_name
    };

    const result = await db.query("SELECT * FROM students WHERE name = $1", [data.name]);
    const check = result.rows;
    if (check.length > 0) {
        return res.send("YOU HAVE ALREADY REGISTERED!!!");
    } else {
        await db.query("INSERT INTO students(name, phoneNumber, age, currentLevel, sex, emergency_phone, family_name) VALUES($1, $2, $3, $4, $5, $6, $7)", 
        [data.name, data.phoneNumber, data.age, data.currentLevel, data.sex, data.emergency_phone, data.family_name]);
    }
    res.render("index.ejs");
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});