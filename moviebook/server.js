'use strict';
const log = console.log

const express = require('express')
const app = express();
const { mongoose } = require('./db/mongoose')
const { User } = require('./Models/user')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

// express-session for managing user sessions
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

//Connect Database
mongoose.connect("mongodb://localhost")
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error("Database connected"))

//Post Routes
const externAPI = require('./routes/externAPI')
const postRouter = require('./routes/postsAPI')
app.use('/posts', postRouter)

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



