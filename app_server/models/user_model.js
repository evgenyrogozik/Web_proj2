var mongoose = require('mongoose');

var userSchema = new mongoose.Schema (
	{first_name:{type:String, required:true},
	 surname:{type:String, required:true},
	 user_name:{type:String, required:true},
	 age:{type:Number, min:0, max:99},
	 country:{type:String, required:false},
	 email:{type:String, required:true}
	});

mongoose.model('User', userSchema);	