// controllers/listing.js
import Listing from '../models/listing.models.js';
import apiResponse from '../utils/apiResponse.js';
import apiError from '../utils/apiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import MediaOwner from '../models/mediaOwner.models.js';

export const addListing = asyncHandler(async (req, res) => {
    const { location, size, price, isAvailable, minBooking, availableFrom } = req.body;
    const owner = await MediaOwner.findById(req.user.id);
    if (!owner) {
        throw new apiError(404, 'Media owner not found');
    }

    const newListing = new Listing({
        location,
        size,
        price,
        mediaOwner: req.user.id,
        isAvailable,
        minBooking,
        availableFrom,
    });
    await newListing.save();

    owner.listings.push(newListing);
    await owner.save();
    res.status(201).json(new apiResponse(201, newListing, 'Listing added successfully'));
});

export const deleteListing = asyncHandler(async (req, res) => {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) {
        throw new apiError(404, 'Listing not found');
    }
    res.status(200).json(new apiResponse(200, 'Listing deleted successfully'));
});

export const editListing = asyncHandler(async (req, res) => {
    const updates = req.body;
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedListing) {
        throw new apiError(404, 'Listing not found');
    }
    res.status(200).json(new apiResponse(200, updatedListing, 'Listing updated successfully'));
});
