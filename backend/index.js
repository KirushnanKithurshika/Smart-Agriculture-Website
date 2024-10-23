import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Import the routes using ES module syntax
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log('Database not connected',err))
const app = express();


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
}));


app.use('/', authRoutes); 

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
