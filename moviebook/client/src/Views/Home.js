import React from 'react'

import { Link } from 'react-router-dom'
import {Feed, Header, Rating, Button} from 'semantic-ui-react'
// import components
import Post from '../Components/Post'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { addPost } from '../Actions/post'



class Home extends React.Component {

  state = {
    movieTitle: null,
    movieLink: 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default-300x169.png',
    userRating: 0,
    userPic: 'https://i.stack.imgur.com/34AD2.jpg',
    date: 'Today',
    // These are the posts, right now its hard coded but in the future we need to flood this 
    // array with the user's friends posts
	  // Requires server call
    posts : [
      {
        date: '4 days ago',
        image: '../../Assets/jim.jpg',
        meta: <Rating defaultRating={3} maxRating={5} disabled /> ,
        summary: 'Jim recommended the Avengers',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'],
      },
      {
        date: '2 weeks ago',
        image: '../../Assets/johnson.jpg',
        meta: <Rating defaultRating={4} maxRating={5} disabled /> ,
        summary: 'Johnson recommended Guardians of the Galaxy',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'],
      },
      {
        date: '1 month ago',
        image: '../../Assets/tim.png',
        meta: <Rating defaultRating={1} maxRating={5} disabled /> ,
        summary: <Feed.User> Tim recommended Avatar</Feed.User>,
        extraImages: ['https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'],
      },
    ],

    // username: `${this.props.location.state.username}`
    username: "User"
  }

  addNewPost = async () => {
    const postList = this.state.posts
    const newSummary = this.state.username.concat(" recommended ", this.state.movieTitle)

	  // Requires server call to get movie info
    const newPost = {
      date: this.state.date,
      image: this.state.userPic,
      meta: <Rating defaultRating={this.state.userRating} maxRating={5} disabled />,
      summary: newSummary,
      extraImages: [`${this.state.movieLink}`]
    }

  
    postList.unshift(newPost)

    this.setState({
      posts: postList
    });
    // add to DB
    await addPost(this.state.movieTitle, this.state.userRating)
    
  }
  
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    // const name = target.name
    console.log(value)
    
    this.setState({ movieTitle: value })

  }

  handleRate = (e, { rating }) => this.setState({ userRating: rating })

  render() {
    return (
        <div style={bgStyle}>
            {/* Includes header, write post component, and multiple Post components */}
            {/* Header */}
            <MuiThemeProvider>
            <Header as='h1' style = {headerStyle}>
              {this.state.username}'s Feed
             
            </Header>
            <Button.Group floated="right">
                <Link to={'./'}> 
                  <Button color = 'red'>Log out</Button>
                </Link>
                <Link to={'./profile'}> 
                  <Button color = 'white'>Profile</Button>
                </Link>
              </Button.Group>
            <div style = {postStyle}>
            <Post
                movieTitle={this.movieTitle}
                movieLink={this.movieLink}
                handleChange={ this.handleInputChange } 
                handleRate= {this.handleRate}
                addNewPost={this.addNewPost}
            />
            </div>
            {/*Makes the feed using the posts*/}
            <div>
              <Feed style = {feedStyle} events={this.state.posts} />
            </div>
            {/* Write post */}
            {/* Posts */}
            </MuiThemeProvider>
        </div>
    );
  }
}
const feedStyle = {
  position: 'relative',
  size: 'large',
  left: '27.5%',
  backgroundImage: 'linear-gradient(to bottom right, #d3e3fc, #FFFFFF)',
  width: '45%',
  boxShadow: ' 0px 30px 40px 5px #314455'

  
}

const headerStyle = {
  color: 'white', 
  textAlign: 'center',
  marginLeft: '0%',
  lineHeight: 2,
  fontSize: '50px',
  backgroundImage: 'linear-gradient(to right, #77a6f7, #00887a)',
}

const postStyle = {
  position: 'relative',
  left: '40%',
  width: "45%",
}

const bgStyle = {
  backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)',
}
export default Home;
