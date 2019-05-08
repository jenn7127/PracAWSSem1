const express = require('express');
const router = express.Router();//generador de rutas

const gamesController = require('../controllers/gamesController');

router.get('/',gamesController.list);
router.post('/add',gamesController.save)

module.exports = router;