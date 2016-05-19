var mongoose = require('mongoose');

var userSchema = new mongoose.Schema (
	{first_name:{type:String, required:true},
	 surname:{type:String, required:true},
	 dob:{type:Date, required:true},
	 email:{type:String, required:true},
	 user_name:{type:String, required:true},
	 password:{type:String, required:true}
	});

mongoose.model('User', userSchema);	