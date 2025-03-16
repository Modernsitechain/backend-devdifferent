const Content = require('../models/Content');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const { title, image } = req.body;

    // Validate input
    if (!title || !image) {
      return res.status(400).json({ error: 'Please provide both title and image' });
    }

    // Create new content
    const content = new Content({
      title,
      image
    });

    // Save content
    await content.save();

    res.status(201).json({
      success: true,
      content
    });
  } catch (err) {
    console.error('Error creating content:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const contents = await Content.find().sort({ createdAt: -1 });
    res.json(contents);
  } catch (err) {
    console.error('Error fetching content:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.json(content);
  } catch (err) {
    console.error('Error fetching content:', err.message);
    
    // Check if error is due to invalid ObjectId
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const { title, image } = req.body;
    
    // Build content object
    const contentFields = {};
    if (title) contentFields.title = title;
    if (image) contentFields.image = image;
    
    // Find content and update
    let content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    content = await Content.findByIdAndUpdate(
      req.params.id,
      { $set: contentFields },
      { new: true }
    );
    
    res.json(content);
  } catch (err) {
    console.error('Error updating content:', err.message);
    
    // Check if error is due to invalid ObjectId
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    await Content.findByIdAndRemove(req.params.id);
    
    res.json({ success: true, message: 'Content removed' });
  } catch (err) {
    console.error('Error deleting content:', err.message);
    
    // Check if error is due to invalid ObjectId
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
};