const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image:{
        type: String
    }
}, {timestamps: true})
postSchema.index({title:'text'})

const Post = mongoose.model('Post',postSchema)
module.exports = Post