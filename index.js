import express from "express"
import bodyParser from "body-parser"
const app = express();
const port = 3000;

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

app.get("/login", (req,res)=>{
    res.render("Login.ejs")
})

app.listen(port,(req,res)=>{
    console.log(`Server in runing on port${port}`);
})