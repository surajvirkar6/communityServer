const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    mobile: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    }, 
    password: {
        type: String,
    },
});

const UserCollection = mongoose.model('User', userSchema);
module.exports = UserCollection;