// Import Mongoose
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Define the schema
const listingSchema = new Schema({
    location: { type: String, required: true },
    size: { type: String, required: true },
    price: {
        hour: Number,
        day: Number,
        month: Number,
    },
    mediaOwner: { type: Schema.Types.ObjectId, ref: 'MediaOwner' },
    isAvailable: { type: Boolean, required: true },
    minBooking: { type: Date, required: true },
    availableFrom: { type: Date, required: true },
});

// Create the model
const Listing = model('Listing', listingSchema);

// Export the model
export default Listing;
