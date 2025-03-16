const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// POST /api/contents - Create a new content
router.post('/', contentController.createContent);

// GET /api/contents - Get all content
router.get('/', contentController.getAllContent);

// GET /api/contents/:id - Get content by ID
router.get('/:id', contentController.getContentById);

// PUT /api/contents/:id - Update content
router.put('/:id', contentController.updateContent);

// DELETE /api/contents/:id - Delete content
router.delete('/:id', contentController.deleteContent);

module.exports = router;