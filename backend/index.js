import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from '../configuration/Userdb.js';
import {authRoutes} from '../routes/authRoutes.js';  // Ensure .js extensions

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
