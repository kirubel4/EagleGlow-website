import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import studentRoutes  from './routes/studentRoutes.js';


// import intiallization
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(join(__dirname, '../client/public/')));

app.use("/students", studentRoutes);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../client/public/index.html'));
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.post('*', async function (req, res, next) {
//     const referer = req.get('referer') || '/';
//     try {
//         lan.changeLanguage(referer);
//         res.redirect(referer);
//     } catch (error) {
//         next(error);
//     }
// });

// let lan;
// async function loadLanguage() {
//     try {
//         const languageFileUrl = pathToFileURL(join(__dirname, 'language.js')).href;
//         lan = await import(languageFileUrl);
//     } catch (error) {
//         console.error("Failed to import language.js:", error);
//     }
// }
// await loadLanguage();

// API Routes
// app.get('/api/students', async (req, res) => {
//     try {
//         const result = await db.query("SELECT * FROM students");
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });