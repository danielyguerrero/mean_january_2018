var mongoose = require('mongoose');

// ==============      Weapon Schema      ================
module.exports = mongoose.model('Weapon', new mongoose.Schema({
	name:{
		type: String,
		require: [true, "Name is required."]

	},
	damage:{
		type: Number,
		required: [true, "Damage value is required."]
	}, 
	_ninja: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ninja'
	}
}));