const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Please fill valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    dateOfBirth: {
        type: Date
    },
    dateOfRegistration:{
        type:Date,
        default:Date.now
    }
})


const createUserRegistationSchema = mongoose.model('RedditUsers',userSchema)

module.exports = createUserRegistationSchema;