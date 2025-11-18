// postsController.js - Controller for handling blog post API logic
const Post = require('../models/Post');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('category author');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single post by ID or slug
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('category author');
    if (!post) return res.status(404).json({ success: false, error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update an existing post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ success: false, error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ success: false, error: 'Post not found' });
    res.status(200).json({ success: true, message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
