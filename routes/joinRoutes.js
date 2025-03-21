const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadImageToR2 } = require('../utils/imageupload');
const Query = require('../models/Query');
const { sendQueryNotification } = require('../utils/emailer');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route to handle join requests
router.post('/', upload.single('aadhaarCard'), async (req, res) => {
    try {
        console.log('Processing join request:', req.body);
        const { userId, teamName, description } = req.body;

        if (!req.file || !userId || !teamName) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }

        // Upload Aadhaar card
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const aadhaarUrl = await uploadImageToR2(base64Image, 'aadhaar_cards');

        // Create join request query
        const joinQuery = new Query({
            user_id: userId,
            query_type: 'Join Request',
            team_name: teamName,
            description: description,
            photo_url: aadhaarUrl,
            status: 'Pending'
        });

        await joinQuery.save();
        await sendQueryNotification(joinQuery);

        res.status(200).json({
            success: true,
            message: 'Join request submitted successfully'
        });
    } catch (error) {
        console.error('Join request error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
