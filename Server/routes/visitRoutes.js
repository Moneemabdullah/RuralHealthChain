const express = require('express');
const router = express.Router();
const { addVisit, getVisits } = require('../controllers/visitController');
const { protect } = require('../middlewares/auth');
const { authorizeRoles } = require('../middlewares/role');

// console.log('authorize visit: ', authorizeRoles);
// console.log('addVisit: ', addVisit);
// console.log('getVisits: ', getVisits);

// Only doctors and healthworkers can add visits or view medical history
router.post('/:nid', protect, authorizeRoles('doctor', 'healthworker'), addVisit);
router.get('/:nid', protect, authorizeRoles('doctor', 'healthworker', 'admin'), getVisits);

module.exports = router;
