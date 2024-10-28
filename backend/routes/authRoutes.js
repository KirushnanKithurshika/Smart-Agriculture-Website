import express from 'express';
import { test, registerUser,loginUser } from '../controllers/authController.js';

const router = express.Router();

// Define routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login',loginUser)

export default router;
