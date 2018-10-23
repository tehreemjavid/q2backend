const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/board_pins_controller')

router.get('/', ctrl.fetchBoard_Pins);
router.get('/:id', ctrl.findBoard_Pins);

router.post('/', ctrl.createBoard_Pins);
router.put('/:id', ctrl.updateBoard_Pins);
router.delete('/:id', ctrl.deleteBoard_Pins);

module.exports = router;