const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    username: String,
    firstName: String,
    lastName: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
