const router = require('express-promise-router')();
const campeonatoController = require('../controllers/campeonatos.controllers');

router.get('/campeonatos', campeonatoController.getCampeonatos);
router.get('/campeonatos/:id',campeonatoController.getCampeonatoById);

module.exports = router;