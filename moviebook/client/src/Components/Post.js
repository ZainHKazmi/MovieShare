import React from 'react';
import { Card, Button, Rating } from 'semantic-ui-react'
import '../App.css';
import { TextField } from 'material-ui';
import { Avatar} from '@material-ui/core'

class Post extends React.Component {
    /*
    state = {
	     movie: []
	     moviePic : []
	
	}
	componentDidMount(){
	
	axios.get('http://www.omdbapi.com/?s='+ this.props.movieTitle + '&apikey=b48abe3')
		  .then(res => {
		 	const movie_ret = res.data;
			this.setState({movie: movie_ret,});
		 })
	
	axios.get('http://img.omdbapi.com/?s=' + moviename + '&apikey=b48abe3'){
		.then(res => {
			const pic = res.data;
			this.setState({moviePic: pic,});
		})
 
  }
  */
  render() {
    //const { addRating, imgLink, movieTitle } = this.props
    console.log(this.props)            
    return (
      <div> 
        <Card style={postStyle} >
          <Avatar style={avatarStyles} src="https://i.stack.imgur.com/34AD2.jpg"/>
          <Card.Content>
            <br/>
            <Card.Header>What have you recently watched?</Card.Header>
            <Card.Description style={{marginLeft: "5%"}}>
              <TextField name='movieTitle' 
                      value={ this.props.movieTitle } 
                      onChange={this.props.handleChange} 
                      type="text" 
                      placeholder="Movie Title" />
            </Card.Description>
            <p style={{marginLeft: "5%", lineHeight: 3}}> Rating: <Rating icon='star' defaultRating={0} maxRating={5} onRate={this.props.handleRate}/>
            <Button primary floated="right" onClick={this.props.addNewPost}>Post</Button>
            </p>
            
          </Card.Content>
       </Card>
      </div>
    )
  }
}

const postStyle = {
  width:"70%", 
  marginTop:"3%", 
  marginLeft: "15%",
  backgroundImage: 'linear-gradient(to bottom left, #FFFFFF, #d3e3fc)',
  boxShadow: ' 0px 10px 40px 0px #314455',
  display: 'flex',
  flexDirection: 'row'
}

const avatarStyles = {
  marginTop: 30,
  marginLeft: "7%",
  width: 80,
  height: 80,
  // borderRadius: 10,
  // borderWidth: 1,
  // borderColor: '#fff'  
}
export default Post;
