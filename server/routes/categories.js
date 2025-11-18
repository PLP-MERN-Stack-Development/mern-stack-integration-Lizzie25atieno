const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { protect } = require('../middleware/auth');
const { categoryValidator } = require('../middleware/validators');
const { validate } = require('../middleware/validate');

// Public routes
router.get('/', categoryController.getAllCategories);

// Protected routes
router.post('/', protect, categoryValidator, validate, categoryController.createCategory);
router.put('/:id', protect, categoryValidator, validate, categoryController.updateCategory);
router.delete('/:id', protect, categoryController.deleteCategory);

module.exports = router;
