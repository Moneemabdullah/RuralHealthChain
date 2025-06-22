const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  patientNID: { type: String, required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  prescription: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Visit', visitSchema);
