import React from 'react'

import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Feed, Header, Rating} from 'semantic-ui-react'

// import components
import PostList from './PostList';


class Home extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
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
    ]
  }
  
  
  
  addPost = () => {

  }

  addRating = (movie) => {

  }
  

  render() {
    return (
        <div>
            {/* Includes header, write post component, and multiple Post components */}
            {/* Header */}
            <Header as='h1' style = {headerStyle}>
              User's Feed
            </Header>

            {/*Makes the feed using the posts*/}
            <div>
              <Feed style = {feedStyle} events={this.state.posts} />
            </div>
            {/* Write post */}
            {/* Posts */}
            <PostList posts = {this.state.posts}
                    addRating = {this.addRating}
            />
            
        </div>
    );
  }
}

const feedStyle = {
  position: 'relative',
  size: 'large',
  left: '25%'
}

const headerStyle = {
  color: '#FE8FB8', 
  textAlign: 'center',
  lineHeight: 2,
  fontSize: '50px',
  background: '#B7D8FE',
}
export default Home;
