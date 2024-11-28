import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {connectDB} from './config/db.js'
import blogRouter from './routes/blog.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for frontend requests
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
}))

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Home page");
})

app.get('/blog', (req, res)=>{
    res.send("Blog page");
})

app.use('/api/blogs', blogRouter);

app.listen(8000, ()=>{
    connectDB();
    console.log(`Server is running on https://localhost:${PORT}`)
})