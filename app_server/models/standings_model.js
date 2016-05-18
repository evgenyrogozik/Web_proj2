var mongoose = require('mongoose');

var standingsSchema = new mongoose.Schema (
	{user_name:{type:String, required:true},
	 wins_vs_com:{type:Number, min:0, max:99},
	 wins_vs_human:{type:Number, min:0, max:99},
	 total_wins:{type:Number, min:0, max:99},
	 total_looses:{type:Number, min:0, max:99},
	});

mongoose.model('standing', standingsSchema);