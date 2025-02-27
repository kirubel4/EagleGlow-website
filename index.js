import express from "express"
import bodyParser from "body-parser"
import pg from "pg";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;
const db = new pg.Client({
    user:"postgres",
    host: "localhost",
    // database:"Eagleglow",
    password:"kirag00d",
    port: 5432
});
db.connect();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

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



app.get("/register",(req,res)=>{
    const data = {
    name :req.body.name,
    phoneNumber :req.body.phoneNumber,
    age : req.body.age,
    currentLevel: req.body.level,
    sex : req.body.sex}
    res.render("Register.ejs",{data:data})
})

app.listen(port,(req,res)=>{
    console.log(`Server in runing on port${port}`);
})