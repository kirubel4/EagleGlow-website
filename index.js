import express from "express"
import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
// import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Convert path to file URL to this format => "file://" on Windows
const languageFileUrl = pathToFileURL(join(__dirname, 'language.js')).href;

// Dynamically import language.js using the correct file URL
const lan = await import(languageFileUrl);

const app = express();
const port = 3000;

dotenv.config();
const de = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // on new version the bodypaser is add together with the express debendency
app.set('view engine', 'ejs');
app.use(express.static("public"));

const db = new pg.Client({
    user: de.DB_USER,
    host: de.DB_HOST,
    database: de.DB_NAME,
    password: de.DB_PASSWORD,
    port: de.DB_PORT,
});
db.connect();

app.get("/", (req,res)=>{
    res.render("home",{ language: "english" });
});

app.get('/home', (req, res) => res.redirect('/')); // Redirect /home to "/"

app.get("/about", (req,res)=>{
    res.render("about",{ language: "english" })
});
app.get("/contact", (req,res)=>{
    res.render("contact",{ language: "english" })
});

app.get("/classes", (req,res)=>{
    res.render("classes",{ language: "english" })
});

app.get("/schedules", (req,res)=>{
    res.render("schedules",{ language: "english" })
});

app.get("/register", (req,res)=>{
    res.render("register",{ language: "english" })
})

app.post('*', (req, res) => {
    const referer = req.get('referer') || '/';  // Default to home if no referer
    
    lan.changeLanguage(referer);
    res.redirect(referer);
});


// app.post("/Register",async(req,res)=>{

//     const con= req.body; // easy to use this way

//     const data = {
//     name :con.name,
//     phoneNumber :con.phoneNumber,
//     age : con.age,
//     currentLevel: con.level,
//     sex : con.sex,
//     emergency_phone : con.emergency_phone,
//     family_name : con.family_name}
    
//     const result = await db.query("SELECT * FROM students WHERE name = $1",[data.name]);
//     const check = result.rows;
//     if (check.length > 0){
//         return res.send("YOU HAVE ALREADY REGISTERED!!!");

//     }else{
        
//         await db.query("INSERT INTO students(name, phoneNumber, age, currentLevel, sex) VALUES($1, $2, $3, $4, $5)", [data.name, data.phoneNumber, data.age, data.currentLevel, data.sex]);


//     }
//     res.render("index.ejs")
// });

app.listen(port,(req,res)=>{
    console.log(`Server in runing on port${port}`);
})