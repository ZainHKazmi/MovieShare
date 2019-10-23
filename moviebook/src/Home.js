import React from 'react'

import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

// import components
import PostList from './PostList';


class Home extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
    posts: [
        {recommendedBy: "Jim", movieName: "The Avengers", rating: "3"},
        {recommendedBy: "Tim", movieName: "Avatar", rating: "1"},
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

            {/* Write post */}

            {/* Posts */}
            <PostList posts = {this.state.posts}
                    addRating = {this.addRating}
            />
            
        </div>
    );
  }
}

export default Home;
