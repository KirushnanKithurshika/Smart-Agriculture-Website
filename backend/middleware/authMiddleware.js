
import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log("Authorization Header:", authHeader); 
  
    if (!authHeader) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    const token = authHeader.split(' ')[1]; 
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log("Decoded Token:", decoded); 
      req.user = decoded; 
      next();
    } catch (err) {
      console.error("Token verification failed:", err.message); 
      return res.status(401).json({ message: 'Token is not valid', error: err.message });
    }
};
