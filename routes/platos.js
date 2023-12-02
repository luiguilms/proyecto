const express = require('express');
const router = express.Router();
const platoController = require('../controllers/platoController');

router.get('/', platoController.getPlatos);
router.get('/:id', platoController.getPlatoById);
router.post('/', platoController.createPlato);
router.put('/:id', platoController.updatePlato);
router.delete('/:id', platoController.deletePlato);

module.exports = router;
