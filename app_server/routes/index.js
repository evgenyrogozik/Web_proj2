var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTest = require('../controllers/testcontroller');
var newUser= mongoose.model('User');
var db = 'mongodb://localhost/test1db';

/* GET home page. */
router.get('/', ctrlMain.index)

router.get('/about.html', ctrlMain.about)

router.get('/howto.html', ctrlMain.howto)

router.get('/references.html', ctrlMain.references)

router.get('/game', ctrlMain.game)

router.get('/dynamic_test', ctrlMain.dynamic_test)

router.get('/register', ctrlMain.register)


/* POST to Add User Service */
router.post('/adduser', ctrlMain.adduser);


module.exports = router;
