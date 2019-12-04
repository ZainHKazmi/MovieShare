const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
	
	rating: {
		type: Number,
		min: 0,
		max: 5,
		default: 0
	},
	movieTitle: {
		type: String
	},
	movieLink: {
		type: String
	},
	date: {
		type: Date, 
		default: Date.now
	}
	
})

// make a model using the User schema
module.exports = mongoose.model('Post', PostSchema)
