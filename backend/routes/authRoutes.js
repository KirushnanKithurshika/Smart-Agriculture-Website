import express from 'express';
import { test, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Define routes
router.get('/', test);
router.post('/register', registerUser);

export default router;
