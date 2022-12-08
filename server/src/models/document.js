const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    file: { type: String, required: true, trim: true },
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Document', documentSchema);