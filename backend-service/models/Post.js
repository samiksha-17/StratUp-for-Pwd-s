// server/models/Post.js

const mongoose = require('mongoose');

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // Assuming you store the image URL as a string
    required: true
  }
});

// Create and export the Post model
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
