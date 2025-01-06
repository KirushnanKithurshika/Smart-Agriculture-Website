
import User from '../models/user.js';
import { hashPassword, comparePassword } from '../helpers/auth.js';


export const test = (req, res) => {
    res.json('Test is working');
};


export const registerUser = async (req, res) => {
    console.log('Request Body:', req.body); 
    try {
        const { name, email, password } = req.body;

       
        if (!name) {
            return res.json({ error: 'Name is required' });
        }
      
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check if the email already exists
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);
        console.log("Hashed Password during registration:", hashedPassword);

        // Create the new user
        const user = await User.create({ 
            name, 
            email, 
            password: hashedPassword,
        });
        
        // Return the new user 
        const { password: _, ...userData } = user.toObject();
        return res.json(userData);
    } catch (error) {
        console.error('Error during registration:', error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Login endpoint
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'No user found' });
        }

        // Compare passwords
        const match = await comparePassword(password, user.password);
        console.log("Entered Password:", password);
        console.log("Stored Hashed Password:", user.password);
        console.log("Match Result:", match);

        if (match) {
            
            res.json({ message: 'Login successful', user: { email: user.email, name: user.name } });
        } else {
            
            res.json({ error: 'Incorrect password' });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
