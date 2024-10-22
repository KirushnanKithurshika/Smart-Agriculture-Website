import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Route to add a user (for testing purposes)
router.post('/add-user', async (req, res) => {
  const { username, password } = req.body;

  // You might want to hash the password before saving
  const newUser = new User({
    username,
    password, // Ideally, hash the password before storing
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;