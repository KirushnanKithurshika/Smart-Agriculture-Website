import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URL, // MongoDB connection string
  options: { useNewUrlParser: true, useUnifiedTopology: true }, // Connection options
  file: (req, file) => ({
    filename: `file-${Date.now()}`, // Custom filename with timestamp
    bucketName: 'uploads', // Bucket in GridFS for storing files
  }),
});

const upload = multer({ storage });

export default upload; // Exporting the 'upload' middleware
