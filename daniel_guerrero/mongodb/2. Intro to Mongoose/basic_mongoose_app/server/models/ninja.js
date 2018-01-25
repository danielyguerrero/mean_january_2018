var mongoose = require('mongoose');

// ==============      Ninja  Schema      ================
module.exports = mongoose.model('Ninja', new mongoose.Schema({
	name: {
		type: String,
		require: [true, "Name is required."]
	},
	age: {
		type: Number,
		required: [true, 'Age is required.']
	},
	weapons: {
		type: Array,
		default: [{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Weapon'
		}]
	}
}, { timestamps: true }));