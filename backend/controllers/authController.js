import User from '../models/user.js';

export const test = (req, res) => {
    res.json('test is working');
};

export const registerUser = async (req, res) => {
    console.log('Request Body:', req.body); // Log incoming request body
    try {
        const { name, email, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.json({ error: 'Name is required' });
        }
        // Check password is good
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is taken already' });
        }

        const user = await User.create({ name, email, password });
        return res.json(user);
    } catch (error) {
        console.error('Error during registration:', error); // Log error details
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
