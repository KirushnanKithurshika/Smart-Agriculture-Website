import express from 'express';
import { test, registerUser, loginUser } from '../controllers/authController.js';
import { getUserProfile, updateUserProfile } from '../controllers/profileController.js'; 
import sendResetPasswordLink from '../middleware/resetPasswordMiddleware.js';
import { authenticateUser } from '../controllers/authController.js'; 
import { updatePassword } from '../middleware/updatePasswordMiddleware.js';

const router = express.Router();


router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/resetpassword', sendResetPasswordLink);
router.post('/updatepassword',updatePassword );
router.get('/profile', authenticateUser, getUserProfile);
router.put('/profile', authenticateUser, updateUserProfile); 

export default router;
