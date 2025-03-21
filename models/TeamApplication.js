const mongoose = require('mongoose');

const TeamApplicationSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    team_name: { type: String, required: true },
    description: { type: String, required: true },
    aadhaar_card_url: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('TeamApplication', TeamApplicationSchema);
