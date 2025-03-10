const express = require('express');
const router = express.Router();
const { upload, uploadToSupabase } = require('../config/multer.config'); // Import both functions

router.get('/home', (req, res) => {
    res.render('home');
});

// Update the upload route to use uploadToSupabase
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        // Upload file to Supabase
        const filePath = await uploadToSupabase(req.file);
        
        // At this point, you might want to save the file info to your MongoDB
        // Example (you'll need to create a file model):
        // const fileDoc = await fileModel.create({
        //     name: req.file.originalname,
        //     path: filePath,
        //     type: req.file.mimetype,
        //     size: req.file.size,
        //     userId: req.user._id // If you have authentication
        // });
        
        res.status(200).json({ 
            success: true, 
            message: 'File uploaded successfully',
            file: {
                name: req.file.originalname,
                path: filePath,
                type: req.file.mimetype,
                size: req.file.size
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ 
            error: 'Failed to upload file',
            details: error.message
        });
    }
});

module.exports = router;