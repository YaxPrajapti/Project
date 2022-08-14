const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true,
        //minlength: 6
    },
    username: {
        type: String,
        required: true
    }
});


const userDB = mongoose.model('userDB', userSchema);

module.exports = userDB;