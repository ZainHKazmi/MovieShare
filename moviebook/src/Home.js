import React from 'react'

import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Feed, Header, Rating, Card, Button} from 'semantic-ui-react'
// import components
import PostList from './PostList'
import Post from './Post'
import Login from './Login'


class Home extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
    movieTitle: "",
    movieLink: 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default-300x169.png',
    userRating: 0,
    userPic: 'https://i.stack.imgur.com/34AD2.jpg',
    date: 'Today',
    // These are the posts, right now its hard coded but in the future we need to flood this array with the user's friends posts
    posts : [
      {
        date: '4 days ago',
        image: '/jim.jpg',
        meta: <Rating defaultRating={3} maxRating={5} disabled /> ,
        summary: 'Jim recommended the Avengers',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'],
      },
      {
        date: '2 weeks ago',
        image: '/johnson.jpg',
        meta: <Rating defaultRating={4} maxRating={5} disabled /> ,
        summary: 'Johnson recommended Guardians of the Galaxy',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'],
      },
      {
        date: '1 month ago',
        image: '/tim.png',
        meta: <Rating defaultRating={1} maxRating={5} disabled /> ,
        summary: 'Tim recommended Avatar',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'],
      },
    ],

    // username: `${this.props.location.state.username}`
    username: 'Johnny'
  }

  
  addPost = () => {
    const postList = this.state.posts
    const newSummary = this.state.username.concat(" recommended ", this.state.movieTitle)

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
    
  }

  addRating = (movie) => {

  }
  
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    
    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value  // [name] sets the object property name to the value of the 'name' variable.
    })

  }

  handleRate = (e, { rating }) => 
      this.setState({ userRating: rating 
      })

  render() {
    return (
        <div>
            {/* Includes header, write post component, and multiple Post components */}
            {/* Header */}
            <Header as='h1' style = {headerStyle}>
              {this.state.username}'s Feed
              <Button.Group floated="right">
                <Link to={'./'}> 
                  <Button>Log out</Button>
                </Link>
                <Link to={'./profile'}> 
                  <Button>Profile</Button>
                </Link>
              </Button.Group>
            </Header>
            <div style = {postStyle}>
            <Post 
                movieTitle={this.movieTitle}
                movieLink={this.movieLink}
                handleChange={ this.handleInputChange } 
                handleRate= {this.handleRate}
                addPost={ this.addPost }
            />
            </div>
            {/*Makes the feed using the posts*/}
            <div>
              <Feed style = {feedStyle} events={this.state.posts} />
            </div>
            {/* Write post */}
            {/* Posts */}
            
        </div>
    );
  }
}
const feedStyle = {
  position: 'relative',
  size: 'large',
  left: '27.5%',
  background: '#FAF1F6',
  width: '45%'
}

const headerStyle = {
  color: '#FE8FB8', 
  textAlign: 'center',
  lineHeight: 2,
  fontSize: '50px',
  background: '#B7D8FE',
}

const postStyle = {
  position: 'relative',
  left: '42.5%',
}
export default Home;
