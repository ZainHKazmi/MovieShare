import React from 'react';
import { Card, Button, Rating } from 'semantic-ui-react'
import '../App.css';
class Post extends React.Component {

  render() {
    //const { addRating, imgLink, movieTitle } = this.props
    console.log(this.props)            
    return (
      <div>
        <Card style={postStyle}>
          <Card.Content style={{width:"80%", marginLeft:"10%"}}>
            <Card.Header>What have you recently watched?</Card.Header>
            <Card.Description>
              <input name='movieTitle' 
                      value={ this.props.movieTitle } 
                      onChange={this.props.handleChange} 
                      type="text" 
                      placeholder="Movie Title" />
            </Card.Description>
            <Button primary onClick={this.props.addNewPost}>Post</Button>
            <span>
              <Rating icon='star' defaultRating={0} maxRating={5} onRate={this.props.handleRate} />
            </span>
          </Card.Content>
       </Card>
      </div>
    )
  }
}

const postStyle = {
  width:"50%", 
  marginLeft:"0%", 
  backgroundImage: 'linear-gradient(to bottom left, #77a6f9, #d3e3fc)',
  boxShadow: ' 0px 0px 10px 10px #77a6f7'

}
export default Post;
