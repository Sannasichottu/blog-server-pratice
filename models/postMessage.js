const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:String,
    message:String,
    name:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likes: {
        type:[String],
        default:[],
    },
    createdAt : {
        type:Date,
        default: new Date()
    }
})


module.exports = mongoose.model("PostMessage", postSchema)