// controllers/mediaOwner.js
import MediaOwner from '../models/mediaOwner.models.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import apiError from '../utils/apiError.js';
import apiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const signUp = asyncHandler(async (req, res) => {
    const { name, contactNumber, email, password, address, city } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newOwner = new MediaOwner({
        name,
        contactNumber,
        email,
        password: hashedPassword,
        address,
        city,
    });
    await newOwner.save();
    res.status(201).json(new apiResponse(201, 'Media owner registered successfully'));
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const owner = await MediaOwner.findOne({ email });
    if (!owner) {
        throw new apiError(404, 'Media owner not found');
    }
    if (!(await bcrypt.compare(password, owner.password))) {
        throw new apiError(401, 'Invalid credentials');
    }
    const token = jwt.sign({ email: owner.email, id: owner._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.status(200).json(new apiResponse(200, { token }, 'Login successful'));
});

export const fetchMediaOwnerListings = asyncHandler(async (req, res) => {
    const owner = await MediaOwner.findById(req.user.id).populate('listings');
    if (!owner) {
        throw new apiError(404, 'Media owner not found');
    }
    res.status(200).json(new apiResponse(200, owner.listings));
});
