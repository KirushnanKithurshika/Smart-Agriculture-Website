import express from 'express';
import { test, registerUser, loginUser } from '../controllers/authController.js';
import { getUserProfile, updateUserProfile } from '../controllers/profileController.js'; 
import sendResetPasswordLink from '../middleware/resetPasswordMiddleware.js';
import { authenticateUser } from '../middleware/authMiddleware.js'; 
import { updatePassword } from '../middleware/updatePasswordMiddleware.js';
// import upload from'../middleware/uploadMiddleware.js';
import {changePassword} from '../controllers/passwordupdateController.js'

const router = express.Router();


router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/resetpassword', sendResetPasswordLink);
router.post('/updatepassword',updatePassword );
router.get('/profile', authenticateUser, getUserProfile);
router.put('/profile', authenticateUser, updateUserProfile); //,upload.single('profilePicture')
router.put('/profile/password', authenticateUser, changePassword);


export default router;
