/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PostSchema = new mongoose.Schema({
	// TODO
	rating: {
		type: Number,
		min: 0,
		max: 5,
		default: 0
	},
	movieTitle: {
		type: String
	},
	date: {
		type: Date, 
		default: Date.now
	}
})

// // An example of Mongoose middleware.
// // This function will run immediately prior to saving the document
// // in the database.
// UserSchema.pre('save', function(next) {
// 	const user = this; // binds this to User document instance

// 	// checks to ensure we don't hash password more than once
// 	if (user.isModified('password')) {
// 		// generate salt and hash the password
// 		bcrypt.genSalt(10, (err, salt) => {
// 			bcrypt.hash(user.password, salt, (err, hash) => {
// 				user.password = hash
// 				next()
// 			})
// 		})
// 	} else {
// 		next()
// 	}
// })

// // A static method on the document model.
// // Allows us to find a User document by comparing the hashed password
// //  to a given one, for example when logging in.
// UserSchema.statics.findByEmailPassword = function(email, password) {
// 	const User = this // binds this to the User model

// 	// First find the user by their email
// 	return User.findOne({ email: email }).then((user) => {
// 		if (!user) {
// 			return Promise.reject()  // a rejected promise
// 		}
// 		// if the user exists, make sure their password is correct
// 		return new Promise((resolve, reject) => {
// 			bcrypt.compare(password, user.password, (err, result) => {
// 				if (result) {
// 					resolve(user)
// 				} else {
// 					reject()
// 				}
// 			})
// 		})
// 	})
// }

// make a model using the User schema
const Post = mongoose.model('Post', PostSchema)
module.exports = { Post }