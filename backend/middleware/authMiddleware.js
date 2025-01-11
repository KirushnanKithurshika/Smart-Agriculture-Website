import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'No token provided. Access denied.' });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

   
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found. Invalid token.' });
    }

 
    req.user = { id: user._id, email: user.email };
    next(); 
  } catch (error) {
    res.status(401).json({ message: 'Invalid token or authentication error.', error });
  }
};
