var mongoose = require('mongoose');

var userSchema = new mongoose.Schema (
	{first_name:{type:String, required:false},
	 surname:{type:String, required:false},
	 dob:{type:Date, required:false},
	 email:{type:String, required:false},
	 user_name:{type:String, required:false},
	 password:{type:String, required:false}
	});

mongoose.model('User', userSchema, 'users');	