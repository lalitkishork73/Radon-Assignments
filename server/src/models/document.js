const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    filename: { type:String, required: true, trim: true},
    file: { type: String, required: true, trim: true },
    filetype:{ type: String, required: true, trim: true},
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Document', documentSchema);