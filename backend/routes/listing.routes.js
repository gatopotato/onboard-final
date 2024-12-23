// routes/listingRoutes.js
import express from 'express';
import { addListing, deleteListing, editListing } from '../controllers/listing.controller.js';
import authenticateJWT from '../middleware/auth.js';

const router = express.Router();

// Routes for listing management, all protected
router.post('/', authenticateJWT, addListing);
router.delete('/:id', authenticateJWT, deleteListing);
router.put('/:id', authenticateJWT, editListing);

export default router;
