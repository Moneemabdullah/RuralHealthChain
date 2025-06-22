const express = require('express');
const router = express.Router();
const {registerPatient, getPatientByNID} = require('../controllers/patientController');
const { protect } = require('../middlewares/auth');
const { authorizeRoles } = require('../middlewares/role');
const { getVisits } = require('../controllers/visitController');

// console.log('authorize patient: ', authorizeRoles)
// console.log('register patient: ', registerPatient)
// console.log('getPatientNID patient: ', getPatientByNID)
// console.log('protect', protect);

// Allow only healthworker and doctor to register/view patients
router.post('/',protect, authorizeRoles('doctor', 'healthworker', 'admin'), registerPatient);
router.get('/:nid',protect, authorizeRoles('doctor', 'healthworker', 'admin'), getPatientByNID);

module.exports = router;
