
const express = require('express')
const router = express.Router()
const { Post } = require('../Models/post')

// to validate object IDs
const { ObjectID } = require('mongodb')

//  "/users/:id/posts/:post_id"

//Get all Posts 
router.get('/', getUser, async (req, res) =>{
    res.json(res.user.userPosts)
})

//Getting One
router.get('/:post_id', getUser, getPost, (req, res) => {
    res.json(res.post)
})

//Creating One 
router.post('/:id', getUser, async (req, res)=>{
    const post = new Post({
        movieTitle: req.body.movieTitle,
        rating: req.body.rating
    })
    res.user.userPosts.push(post)
    try{
        const newPost = await post.save()
        res.status(200).json(newPost)
    }catch(err){
        res.status(400).json({messge: err.message})
    }
})


router.patch('/post/:id', getUser, getPost ,async (req, res) => {
	// Add code here
	try{
		if (req.body.movieTitle != null){
			res.user.post.movieTitle = req.body.movieTitle  
		}
		if (req.body.rating != null){
			res.user.post.rating = req.body.rating
		}
		const patchedPost = await res.user.save()
		res.send({
			"user": res.user,
			"post": res.user.post
		})
	}catch(err){
		res.status(500).json({message: err.message})
	}
})

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

module.exports = router 
