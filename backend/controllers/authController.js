
import User from '../models/user.js';
import { hashPassword, comparePassword } from '../helpers/auth.js';
import jwt from 'jsonwebtoken';

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

      
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

       
        const hashedPassword = await hashPassword(password);
        console.log("Hashed Password during registration:", hashedPassword);

       
        const user = await User.create({ 
            name, 
            email, 
            password: hashedPassword,
        });
        
  
        const { password: _, ...userData } = user.toObject();
        return res.json(userData);
    } catch (error) {
        console.error('Error during registration:', error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

       
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'No user found' });
        }

        const match = await comparePassword(password, user.password);
        console.log("Entered Password:", password);
        console.log("Stored Hashed Password:", user.password);
        console.log("Match Result:", match);

        if (match) {
          
            const token = jwt.sign(
                { id: user._id, email: user.email }, 
                process.env.JWT_SECRET_KEY,            
                { expiresIn: '1h' }               
            );

            
            res.json({ 
                message: 'Login successful', 
                token, 
                user: { email: user.email, name: user.name }
            });
        } else {
            res.json({ error: 'Incorrect password' });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



  
// export const updateUserProfile = async (req, res) => {
//     try {
//         const { name, contactNumber, address, jobDescription } = req.body;
//         const userId = req.user.id;

//         // Validate input data
//         if (!name || !contactNumber || !address || !jobDescription) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         // Find the user by ID and update their details
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             { name, contactNumber, address, jobDescription },
//             { new: true }  // Return the updated user
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         res.json({ message: "Profile updated successfully", user: updatedUser });
//     } catch (error) {
//         console.error("Error updating profile:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
