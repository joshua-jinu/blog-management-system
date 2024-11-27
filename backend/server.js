import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Home page");
})

app.get('/blog', (req, res)=>{
    res.send("Blog page");
})

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on https://localhost:${PORT}`)
})