import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const requireAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach user data to the request
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token.' });
    }
};
