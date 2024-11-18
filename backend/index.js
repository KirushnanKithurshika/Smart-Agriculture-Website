import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js'; 
import equipmentRoutes from './routes/equipmentRoutes.js';
import logRoutes from './routes/logRoutes.js'
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (error) {
    console.error('Database not connected', error);
  }
})();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/', authRoutes); 
app.use('/api', employeeRoutes); 
app.use('/api/logs', logRoutes);
app.use('/api/equipment', equipmentRoutes);



// Server start
app.listen(port, () => console.log(`Server is running on port ${port}`));
