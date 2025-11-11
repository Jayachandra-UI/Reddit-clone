
const mongoose = require("mongoose");

const createPost = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    username:{
        type:String,
        required:true
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    community:{
        type:String
    },
    attachment: {
        type: String,
        required: true,
    }
},{timestamps:true})

const createPostSchema = mongoose.model('Posts', createPost);
module.exports = createPostSchema;