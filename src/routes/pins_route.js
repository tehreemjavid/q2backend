const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pins_controllers')

router.get('/', ctrl.fetchPins);
router.get('/:id', ctrl.findPins);

router.post('/', ctrl.createPins);
router.put('/:id', ctrl.updatePins);
router.delete('/:id', ctrl.deletePins);

router.post('/addpin', ctrl.addPin);

module.exports = router;