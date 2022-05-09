const router = require('express-promise-router')();
const fasesController = require('../controllers/fase.controllers');

router.get('/campeonatos/:id/fases/:idfases', fasesController.getFases);

module.exports = router;