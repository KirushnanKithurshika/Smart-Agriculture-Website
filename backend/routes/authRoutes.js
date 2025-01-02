import express from 'express';
import { test, registerUser,loginUser } from '../controllers/authController.js';
import sendResetPasswordLink from '../middleware/resetPasswordMiddleware.js';

const router = express.Router();

// Define routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login',loginUser);
router.post('/resetpassword',sendResetPasswordLink);

export default router;
