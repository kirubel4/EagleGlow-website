import express from "express"
import bodyParser from "body-parser"
import pg from "pg";
// import ejs from "ejs";
// import axios from "axios";



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
    password:"0911420756",
    port: 5432
});
db.connect();

app.get("/", (req,res)=>{
    res.render("index.ejs")
});

app.get("/about", (req,res)=>{
    res.render("About.ejs")
});

app.get("/contact", (req,res)=>{
    res.render("Contact.ejs")
});

app.get("/classes", (req,res)=>{
    res.render("Classes.ejs")
});

app.get("/schedules", (req,res)=>{
    res.render("Schedules.ejs")
});

app.get("/register", (req,res)=>{
    res.render("Schedules.ejs")
})

app.post("/Register",async(req,res)=>{
    
    const con= req.body; // easy to use this way

    const data = {
    name :con.name,
    phoneNumber :con.phoneNumber,
    age : con.age,
    currentLevel: con.level,
    sex : con.sex,
    emergency_phone : con.emergency_phone,
    family_name : con.family_name}
    
    const result = await db.query("SELECT * FROM students WHERE name = $1",[data.name]);
    const check = result.rows;
    if (check.length > 0){
        return res.send("YOU HAVE ALREADY REGISTERED!!!");

    }else{
        
        await db.query("INSERT INTO students(name, phoneNumber, age, currentLevel, sex) VALUES($1, $2, $3, $4, $5)", [data.name, data.phoneNumber, data.age, data.currentLevel, data.sex]);


    }
    res.render("index.ejs")
});

app.listen(port,(req,res)=>{
    console.log(`Server in runing on port${port}`);
})