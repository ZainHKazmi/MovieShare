import React from 'react';
// import { uid } from 'react-uid';

// import Movie from './Movie'
import Post from './Post'

/* Component for the List of Students */
class PostList extends React.Component {
  render() {
    const { posts, addRating } = this.props

    return (
      <ul>
        { posts.map((post) => {
          return(
              <Post 
                    // key={ uid(post) } 
                    post={ post } 
                    addRating={ addRating } />
          )
        }) }
       </ul>
    )
  }
}

export default PostList;