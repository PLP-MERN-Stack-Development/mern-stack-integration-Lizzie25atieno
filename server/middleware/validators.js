const { body } = require('express-validator');

exports.postValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('category').notEmpty().withMessage('Category is required'),
];

exports.categoryValidator = [
  body('name').notEmpty().withMessage('Category name is required'),
];
