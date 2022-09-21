const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter valid Email address'],
    },
    userName: {
        type: String,
        unique: true,
    }
});

const UserCollection = mongoose.model('User', userSchema);
module.exports = UserCollection;