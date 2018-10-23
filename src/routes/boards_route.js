const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/boards_controller')

router.get('/', ctrl.fetchBoards);
router.get('/:id', ctrl.findBoards);

router.post('/', ctrl.createBoards);
router.put('/:id', ctrl.updateBoards);
router.delete('/:id', ctrl.deleteBoards);

module.exports = router;