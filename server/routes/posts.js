const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { protect } = require('../middleware/auth');
const { postValidator } = require('../middleware/validators');
const { validate } = require('../middleware/validate');

// CRUD routes
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPost);
router.post('/', protect, postValidator, validate, postsController.createPost);
router.put('/:id', protect, postValidator, validate, postsController.updatePost);
router.delete('/:id', protect, postsController.deletePost);

module.exports = router;
