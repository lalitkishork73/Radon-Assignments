const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: Number, required: true, trim: true, lowercase: true, unique: true },
    photo: { type: String, required: true, trim: true, lowercase: true },
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);