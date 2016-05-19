require('../models/db');
var mongoose = require('mongoose');
var User = mongoose.model('User');

/*Get Home Page*/
module.exports.index = function (req, res) {
	res.render('index',{title: 'MainPage'});
};
//static
module.exports.about = function (req, res) {
	res.sendfile('public/static/about.html', {title: 'About'});
};
//static
module.exports.howto = function (req, res) {
	res.sendfile('public/static/howto.html',{title: 'How To Play'});
};
//static
module.exports.references = function (req, res) {
	res.sendfile('public/static/references.html',{title: 'references'});
};
//dynamic
module.exports.game = function (req, res) {
	res.render('game',{title: 'GamePage'});
};

//dynamic
module.exports.dynamic_test = function (req, res) {
	res.render('dynamic_test',{title: 'TEST', heading: 'HELLO WORLD', value: 2, description: 'This is description'});
};

module.exports.register = reg;

function reg(req, res) {
	res.render('register',{title: 'Registration'});
};

module.exports.adduser = function(req, res) {

	var newuser = new User({first_name: req.body.given_name, surname: req.body.surname, dob: req.body.dob, email: req.body.email, user_name: req.body.user_name, password: req.body.pass1});
	console.log(newuser);
	newuser.save(function(err, data) {
		if(err) {
			console.log(err);
			res.status(500);
			res.render('error', {
				message:err.message,
				error: err
			});
		}
		else {
			console.log(data, ' saved');
			reg(req, res);
		}
	});
    // Set our internal DB variable

    // Get our form values. These rely on the "name" attributes
    /*var givenName = req.body.given_name;
    var surname = req.body.surname;
    var dob = req.body.dob;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    //db.createCollection("newUser", newUser2)

    // Set our collection
    var collection = db.users.find();

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
    */

}


module.exports.login = login;

function login(req, res) {
    res.render('login',{title: 'Login Page'});
};


module.exports.userlogin = function(req, res) {

    User.findOne({'user_name': req.body.user_name}, 'user_name surname password', function (err, person) {
        if(err) return console.log(err);
        if(person == null)  return console.log("no such user_name");
        else
        console.log('%s is a %s.', person.user_name, person.surname);
        if(person.password.localeCompare(req.body.pass) == 0) {
            console.log("You are logged in");
            login(req, res);
        }
        else  return console.log("Password is wrong");
    })
}