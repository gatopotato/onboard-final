// Import Mongoose
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Define the schema
const mediaOwnerSchema = new Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }],
});

// Create the model
const MediaOwner = model('MediaOwner', mediaOwnerSchema);

// Export the model
export default MediaOwner;
