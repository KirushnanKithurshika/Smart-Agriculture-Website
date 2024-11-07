// controllers/logController.js
import Log from '../models/log.js';

// Add a new log
export const addLog = async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add log' });
  }
};

// Get all logs
export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ time: -1 });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve logs' });
  }
};
