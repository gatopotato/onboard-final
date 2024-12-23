import express from 'express';
import mongoose from 'mongoose';
import mediaOwnerRoutes from './routes/mediaOwner.routes.js';
import listingRoutes from './routes/listing.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors()); // Middleware for enabling CORS
// Connect to MongoDB
app.use(express.static('dist'));
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
// Use routes
app.use('/api/mediaOwner', mediaOwnerRoutes);
app.use('/api/listing', listingRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
