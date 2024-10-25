import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Adjust the path if necessary
import mongoose from 'mongoose';

dotenv.config();

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database not connected', err));

// Middleware
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/', authRoutes); 

// Start the server
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
