const Patient = require('../models/Patient');

exports.registerPatient = async(req, res) => {
  try{
    const { nid, name, phone, address, gender, dob, zilla } = req.body;

    const existing = await Patient.findOne({ nid });
    if(existing){
      return res.status(400).json({ message: 'Patient already exists' });
    }


    const patient = new Patient({ nid, name, phone, address, gender, dob, zilla });
    await patient.save();

    res.status(201).json(patient);
  } 
  catch(err){
    res.status(500).json({ message: err.message });
  }
};

exports.getPatientByNID = async (req, res) => {
  try{
    const { nid } = req.params;

    const patient = await Patient.findOne({ nid });
    if(!patient){
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(patient);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
};
