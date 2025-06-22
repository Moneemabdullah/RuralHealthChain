const Visit = require('../models/Visit');
const Patient = require('../models/Patient');

exports.addVisit = async (req, res) => {
  try {
    const { nid } = req.params;
    const { description, prescription } = req.body;

    const patient = await Patient.findOne({ nid });
    if(!patient){
      return res.status(404).json({ message: 'Patient not found' });
    }

    const visit = new Visit({
      patientNID: nid,
      doctorId: req.user.id,
      description,
      prescription,
    });

    await visit.save();
    res.status(201).json(visit);
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
};

exports.getVisits = async(req, res)=>{
  try{
    const { nid } = req.params;

    const visits = await Visit.find({ patientNID: nid }).populate('doctorId', 'name role');

    res.json(visits);
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
};
