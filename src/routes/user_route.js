const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user_controller')

router.get('/', ctrl.fetchUsers);
router.get('/:id', ctrl.findUser);

router.post('/', ctrl.createUser);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);

module.exports = router;