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
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var givenName = req.body.given_name;
    var surname = req.body.surname;
    var dob = req.body.dob;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    //db.createCollection("newUser", newUser2)

    // Set our collection
    var collection = db.get(newUser);

    // Submit to the DB
    collection.insert({
        "firstName" : givenName,
        "surname" : surname,
        "dob" : dob,
        "email" : email,
        "user_name" : username,
        "password" : password
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            //res.redirect("userlist");
            console.log("Hello");
        }
    });

});


module.exports = router;
