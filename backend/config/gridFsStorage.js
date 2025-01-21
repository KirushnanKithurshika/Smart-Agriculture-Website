import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URL, // Database URL from environment variables
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: `file-${Date.now()}`, // Custom filename
      bucketName: 'uploads', // Bucket in GridFS
    };
  },
});

const upload = multer({ storage });

export default upload;
