import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Adjust the path if necessary
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database Connected'))
.catch((err)=> console.log('Database not connected',err))
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/', authRoutes); 

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
