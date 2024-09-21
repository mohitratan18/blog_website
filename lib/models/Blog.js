const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    image:{
        type:String,
        required:true
    },
    authorImg:{
        type:String,
        required:true
    }
});
const Blog = mongoose.model('Blog',BlogSchema);

export default Blog;