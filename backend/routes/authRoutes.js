import express from 'express';
import cors from 'cors'; 
import { test } from '../controllers/authController.js'; 

const router = express.Router();


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000', 
    })
);


router.get('/', test);


export default router;
