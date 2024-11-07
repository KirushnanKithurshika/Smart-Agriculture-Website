import Log from '../models/log.js';

// Add a new log
export const addLog = async (req, res) => {
  try {
    // If the request body contains multiple logs
    const logs = Array.isArray(req.body) ? req.body : [req.body];

    // Bulk insert into the database
    const savedLogs = await Log.insertMany(logs);
    res.status(201).json(savedLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add logs' });
  }
};

// Get all logs
export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ time: -1 }); // Sort by time, most recent first
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve logs' });
  }
};

// Get the most recent log
export const getLatestLog = async (req, res) => {
  try {
    // Retrieve the latest log based on the time (assuming 'time' is a Date field)
    const latestLog = await Log.findOne().sort({ time: -1 }); // Sort by time, most recent first
    if (!latestLog) {
      return res.status(404).json({ error: 'No logs found' });
    }
    res.status(200).json(latestLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the latest log' });
  }
};
