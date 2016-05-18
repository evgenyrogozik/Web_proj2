var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTest = require('../controllers/testcontroller');

/* GET home page. */
router.get('/', ctrlMain.index)

router.get('/about.html', ctrlMain.about)

router.get('/howto.html', ctrlMain.howto)

router.get('/references.html', ctrlMain.references)

router.get('/game', ctrlMain.game)

router.get('/dynamic_test', ctrlMain.dynamic_test)

module.exports = router;
