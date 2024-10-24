import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Adjust the path if necessary

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/', authRoutes); // Use imported routes

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
