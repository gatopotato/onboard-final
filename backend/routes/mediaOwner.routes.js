// routes/mediaOwnerRoutes.js
import express from 'express';
import { signUp, login, fetchMediaOwnerListings } from '../controllers/mediaOwner.controller.js';
import authenticateJWT from '../middleware/auth.js';

const router = express.Router();

// Routes for media owner actions
router.post('/signup', signUp);
router.post('/login', login);
router.get('/listings', authenticateJWT, fetchMediaOwnerListings);

export default router;
