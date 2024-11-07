
import express from 'express';
import { addLog, getLogs,getLatestLog } from '../controllers/logController.js';

const router = express.Router();

router.post('/add', addLog);     
router.get('/', getLogs);        
router.get('/latest', getLatestLog);
export default router;
