const { TeamApplication } = require('../models/TeamApplication');
const { uploadImageToR2 } = require('../utils/imageupload');
const { sendQueryEmail } = require('../utils/email');

exports.handleJoinRequest = async (req, res) => {
  try {
    const { userId, teamName, description } = req.body;
    const aadhaarFile = req.file;

    if (!userId || !teamName || !description || !aadhaarFile) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Upload Aadhaar card to R2
    const base64Image = req.file.buffer.toString('base64');
    const aadhaarUrl = await uploadImageToR2(base64Image, 'aadhaar_cards');

    // Create team application
    const application = new TeamApplication({
      user_id: userId,
      team_name: teamName,
      description: description,
      aadhaar_card_url: aadhaarUrl,
    });

    await application.save();

    return res.status(200).json({
      success: true,
      message: 'Join request submitted successfully'
    });
  } catch (error) {
    console.error('Error handling join request:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing join request',
      error: error.message
    });
  }
};

// Get all join requests
exports.getAllJoinRequests = async (req, res) => {
  try {
    const requests = await TeamApplication.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: requests });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get join request by ID
exports.getJoinRequestById = async (req, res) => {
  try {
    const request = await TeamApplication.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }
    return res.status(200).json({ success: true, data: request });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Update join request status
exports.updateJoinRequestStatus = async (req, res) => {
  try {
    const request = await TeamApplication.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    return res.status(200).json({ success: true, data: request });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Delete join request
exports.deleteJoinRequest = async (req, res) => {
  try {
    await TeamApplication.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, message: 'Request deleted' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get join statistics
exports.getJoinStatistics = async (req, res) => {
  try {
    const total = await TeamApplication.countDocuments();
    const pending = await TeamApplication.countDocuments({ status: 'Pending' });
    const approved = await TeamApplication.countDocuments({ status: 'Approved' });
    const rejected = await TeamApplication.countDocuments({ status: 'Rejected' });

    return res.status(200).json({
      success: true,
      data: { total, pending, approved, rejected }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get requests by team
exports.getJoinRequestsByTeam = async (req, res) => {
  try {
    const requests = await TeamApplication.find({ team_name: req.params.teamName });
    return res.status(200).json({ success: true, data: requests });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
