import express from "express"
import bodyParser from "body-parser"
import pg from "pg";
// import ejs from "ejs";
// import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let lan;
try {
    // Convert path to file URL to this format => "file://" on Windows
    const languageFileUrl = pathToFileURL(join(__dirname, 'language.js')).href;
    lan = await import(languageFileUrl);
} catch (error) {
    console.error("Failed to import language.js:", error);
}

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // on new version the bodypaser is add together with the express debendency
app.set('view engine', 'ejs');
app.use(express.static("public"));

const db = new pg.Client({
    user:"postgres",
    host: "localhost",
    database:"EagleGlow",
    password:"kirag00d",
    port: 5432
});
db.connect().catch(err => {
    console.error("Database connection failed:", err);
    process.exit(1);
});

app.get("/", (req,res)=>{
    res.render("index.ejs")
});

app.get('/home', (req, res) => res.redirect('/')); // Redirect /home to "/"

app.get("/about", (req,res)=>{
    res.render("about",{ language: "english" ,  cssFile: "about.css" });
});

app.get("/contact", (req,res)=>{
    res.render("contact",{ language: "english" ,  cssFile: "contact.css" });
});

app.get("/classes", (req,res)=>{
    res.render("classes",{ language: "english" ,  cssFile: "classes.css" });
});

app.get("/schedules", (req,res)=>{
    res.render("schedules",{ language: "english" ,  cssFile: "schedules.css" });
});

app.get("/register", (req,res)=>{
    res.render("register",{ language: "english" ,  cssFile: "register.css" });
})

app.post('*', async  function (req, res)  {

    //handels language changes
    const referer = await req.get('referer') || '/';  // Default to home if no referer
    try {
        lan.changeLanguage(referer);
        res.redirect(referer);
    } catch (error) {
        next(error); // Pass error to Express error handler
    }
});


app.post("/register", async (req, res) => {
    try {
        const con = req.body;

        const data = {
            name: con.name,
            phoneNumber: con.phoneNumber,
            age: con.age,
            currentLevel: con.level,
            sex: con.sex,
            emergency_phone: con.emergency_phone,
            family_name: con.family_name
        };

        const result = await db.query("SELECT * FROM students WHERE name = $1", [data.name]);

        if (result.rows.length > 0) {
            return res.send("YOU HAVE ALREADY REGISTERED!!!");
        }

        await db.query(
            "INSERT INTO students(name, phoneNumber, age, currentLevel, sex, emergency_phone, family_name) VALUES($1, $2, $3, $4, $5, $6, $7)", 
            [data.name, data.phoneNumber, data.age, data.currentLevel, data.sex, data.emergency_phone, data.family_name]
        );

        res.redirect("/register");
    } catch (error) {
        console.error("Error in /register:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
