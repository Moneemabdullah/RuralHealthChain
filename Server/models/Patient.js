const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  nid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  gender: { type: String },
  dob: { type: Date },
  historySummary: { type: String },
  zilla: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
