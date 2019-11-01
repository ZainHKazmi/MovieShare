import React from 'react';
import { Card, Button, Rating } from 'semantic-ui-react'


/* Component for the List of Students */
class Post extends React.Component {

  render() {
    //const { addRating, imgLink, movieTitle } = this.props
    console.log(this.props)            
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>What have you recently watched?</Card.Header>
            <Card.Description>
              <input name='movieTitle' 
                      value={ this.props.movieTitle } 
                      onChange={this.props.handleChange} 
                      type="text" 
                      placeholder="Movie Title" />
            </Card.Description>
            <Button onClick={this.props.addPost} primary>Post</Button>
            <span>
              <Rating icon='star' defaultRating={0} maxRating={5} onRate={this.props.handleRate} />
            </span>
          </Card.Content>
       </Card>
      </div>
    )
  }
}

export default Post;
