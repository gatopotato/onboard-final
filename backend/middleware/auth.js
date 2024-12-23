// middleware/auth.js
import jwt from 'jsonwebtoken';
import apiError from '../utils/apiError.js';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new apiError(401, 'Authorization token is missing');
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            throw new apiError(403, 'Invalid or expired token');
        }
        req.user = user;
        next();
    });
};

export default authenticateJWT;
