'use strict';
const log = console.log

const express = require('express')
const app = express();
const { mongoose } = require('./db/mongoose')
const { User } = require('./Models/user')
const Post = require('./Models/post')
const { ObjectID } = require('mongodb')
// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

// express-session for managing user sessions
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

//Connect Database
mongoose.connect("mongodb://localhost", {userNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error("Database connected"))

//Post Routes
/*
const postRouter = require('./routes/postsAPI')
app.use('/users/:id/posts', postRouter)
*/

/** User routes below **/
// Set up a POST route to *create* a user of your web app (*not* a student).
app.post('/users', (req, res) => {
	// Create a new user
	const user = new User({
		email: req.body.email,
        password: req.body.password,
        userPosts: []
	})

	// Save the user
	user.save().then((user) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

//Get ALl Users
app.get('/users', async (req, res) =>{
    try{
        const allUsers = await User.find()
        res.json(allUsers)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//Get Single User
app.get('/users/:id', getUser, async (req,res) =>{
    res.json(res.user)
})

//Delete user
app.delete('/users/:id', (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Delete a post by their id
	User.findByIdAndRemove(id).then((user) => {
		if (!user) {
			res.status(404).send()
		} else {   
			res.send(post)
		}
	}).catch((error) => {
		res.status(500).send() 
	})
})
app.post('/users', async (req, res)=>{
    const user = new User({
	email: req.body.username,
	password: req.body.password
    })
    res.push(user)
    const newUser = await res.save()
    try{
        res.status(201).json(newUser)
    }catch(err){
	res.status(400).json({message: err.message})
    }
})
//Get all Posts 
app.get('/users/:id/posts', getUser, async (req, res) =>{
    res.json(res.user.userPosts)
})

//Getting One
app.get('/users/:id/posts/:post_id', getUser, getPost, (req, res) => {
    res.json(res.post)
})

//Creating One 
app.post('/users/:id/posts', getUser, async (req, res)=>{
    const post = new Post({
        movieTitle: req.body.movieTitle,
        rating: req.body.rating
    })
    res.user.userPosts.push(post)
    try{
        const newPost = await res.user.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(400).json({messge: err.message})
    }
})


app.patch('/users/:id/posts/:post_id', getUser, getPost ,async (req, res) => {
	// Add code here
	try{
		if (req.body.movieTitle != null){
			res.post.movieTitle = req.body.movieTitle  
		}
		if (req.body.rating != null){
			res.post.rating = req.body.rating
		}
		const patchedPost = await res.user.save()
		res.send({
			"user": res.user,
			"post": res.post
		})
	}catch(err){
		res.status(500).json({message: err.message})
	}
})

//Delete One
app.delete('/users/:id/posts/:post_id', getUser, getPost, async (req, res) => {
    try{
        await res.post.remove()
        res.json("Deleted Post")
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//MiddleWare to get specific post 
async function getPost(req, res, next) {
    let post
    try{
        post = await res.user.userPosts.id(req.params.post_id)
        if (post == null){
            return res.status(404).json({message: 'Cannot find post'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.post = post
    next()
}


//MiddleWare to get specific User
async function getUser(req, res, next) {
    let user
    try{
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: 'Cannot find user'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.user = user
    next()
}

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
