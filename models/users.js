const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
            minlength: 8
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;