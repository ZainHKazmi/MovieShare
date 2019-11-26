'use strict';
const log = console.log

const express = require('express')
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('../db/mongoose')

// import the mongoose models
const { User } = require('../Models/user')

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

// express-session for managing user sessions
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'oursecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,
        httpOnly: true
    }
}));

// Our own express middleware to check for 
// an active user on the session cookie (indicating a logged in user.)
const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/dashboard'); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }    
};

// A route to login and create a session
app.post('/users/login', (req, res) => {
	const email = req.body.email
  const password = req.body.password

  log(email, password)
  // Use the static method on the User model to find a user
  // by their email and password
	User.findByEmailPassword(email, password).then((user) => {
	    if (!user) {
	    	log('User not found')
            // res.redirect('/');
        } else {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            log('SESSION!')
            req.session.user = user._id;
            res.redirect('/home')
        }
    }).catch((error) => {
    	log(400)
		  res.status(400).redirect('/l');
    })
})

// A route to logout a user
app.get('/users/logout', (req, res) => {
	// Remove the session
	req.session.destroy((error) => {
		if (error) {
			res.status(500).send(error)
		} else {
			res.redirect('/')
		}
	})
})

// A route to check if a use is logged in on the session cookie
app.get('/users/check-session', (req, res) => {
	// Remove the session
	if (req.session.user) {
        res.send({screen: 'auth'});
    } else {
        res.redirect('/')
    } 
})

/*********************************************************/

/*** API Routes below ************************************/

/** Post resource routes **/
// a POST route to *create* a post
app.post('/post', (req, res) => {
  // TODO
	// log(req.body)

	// Create a new student using the Student mongoose model
	// const post = new Post()

	// Save post to the database
	// post.save().then((result) => {
	// 	res.send(result)
	// }, (error) => {
	// 	res.status(400).send(error) // 400 for bad request
	// })
})

// a GET route to get all posts
app.get('/posts', (req, res) => {
  // TODO
	// Post.find().then((posts) => {
	// 	log()
	// 	res.send({ posts }) // can wrap in object if want to add more properties
	// }, (error) => {
	// 	res.status(500).send(error) // server error
	// })
})

/// a GET route to get a student by their id.
// id is treated as a wildcard parameter, which is why there is a colon : beside it.
// (in this case, the database id, but you can make your own id system for your project)
app.get('/posts/:id', (req, res) => {
	/// req.params has the wildcard parameters in the url, in this case, id.
	// log(req.params.id)
	const id = req.params.id

	// Good practise: Validate id immediately.
	if (!ObjectID.isValid(id)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
	}

  // Otherwise, findById
  // TODO
	// Post.findById(id).then((post) => {
	// 	if (!post) {
	// 		res.status(404).send()  // could not find this student
	// 	} else {
	// 		/// sometimes we wrap returned object in another object:
	// 		//res.send({student})   
	// 		res.send(post)
	// 	}
	// }).catch((error) => {
	// 	res.status(500).send()  // server error
	// })

})

/// a DELETE route to remove a student by their id.
app.delete('/students/:id', (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Delete a student by their id
	Student.findByIdAndRemove(id).then((student) => {
		if (!student) {
			res.status(404).send()
		} else {   
			res.send(student)
		}
	}).catch((error) => {
		res.status(500).send() // server error, could not delete.
	})
})

// a PATCH route for changing properties of a resource.
// (alternatively, a PUT is used more often for replacing entire resources).
app.patch('/posts/:id', (req, res) => {
	const id = req.params.id

  // TODO
	// get the updated ___ rating? ____ only from the request body.

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Update the student by their id.
	// Post.findByIdAndUpdate(id, {$set: body}, {new: true}).then((post) => {
	// 	if (!post) {
	// 		res.status(404).send()
	// 	} else {   
	// 		res.send(post)
	// 	}
	// }).catch((error) => {
	// 	res.status(400).send() // bad request for changing the student.
	// })

})


/** User routes below **/
// TODO check below
// Set up a POST route to *create* a user of your web app (*not* a student).
app.post('/users', (req, res) => {
	log(req.body)

	// Create a new user
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})

	// Save the user
	user.save().then((user) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + '/client/build'));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
})

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3001
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 



