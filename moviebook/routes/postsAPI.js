
const express = require('express')
const router = express.Router()
const Post = require('../Models/post')

// to validate object IDs
const { ObjectID } = require('mongodb')

//Get all Posts 
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//Getting One
router.get('/:id', getPost, (req, res) => {
    res.json(res.post)
})

//Creating One 
router.post('/', async (req, res)=>{
    const post = new Post({
        movieTitle: req.body.movieTitle,
        rating: req.body.rating
    })
    try{
        const newPost = await post.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(400).json({messge: err.message})
    }
})

//Updating omitted


//Delete One
router.delete('/posts/:id', (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Delete a post by their id
	Post.findByIdAndRemove(id).then((post) => {
		if (!post) {
			res.status(404).send()
		} else {   
			res.send(post)
		}
	}).catch((error) => {
		res.status(500).send() 
	})
})

//MiddleWare to get specific post 
async function getPost(req, res, next) {
    let post
    try{
        post = await Post.findById(req.params.id)
        if (subscriber == null){
            return res.status(404).json({message: 'Cannot find post'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.post = post
    next()
}

module.exports = router 
