
import express from 'express';
import { addLog, getLogs } from '../controllers/logController.js';

const router = express.Router();

router.post('/add', addLog);      // Route to add a new log entry
router.get('/', getLogs);          // Route to get all log entries

export default router;
