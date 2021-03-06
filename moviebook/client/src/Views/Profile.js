import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Container, Divider} from '@material-ui/core'
import {Feed, Button, Rating} from 'semantic-ui-react'



class Profile extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
	  // Requires server call to access user data
    recommendations: [
      {
        meta: <Rating defaultRating={3} maxRating={5} disabled /> ,
        summary: 'The Avengers',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'],
      },
      {
        meta: <Rating defaultRating={4} maxRating={5} disabled /> ,
        summary: 'Guardians of the Galaxy',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'],
      },
    ],
    watchlater: [{
        date: '1 month ago',
        summary: 'Avatar',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'],
      }],

    favourites: [{
        summary: 'The Avengers',
        extraImages: ['https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'],
      }]
}

  render() {
    return (
        
        <div style={{backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)'}}>
          <Container maxWidth="xl">
          <Grid container justify="space-evenly">
            <Grid item xs={4} style={useStyles.colStyle} >
              <div style={{margin: 10}}>
                <Avatar style={useStyles.avatar} src="https://i.stack.imgur.com/34AD2.jpg"/>
                <h1>User</h1>
                <h3>Friends</h3>
                <Avatar style={useStyles.friends} src="../../Assets/tim.png"/>
                <Avatar style={useStyles.friends} src="../../Assets/johnson.jpg"/>
                <Avatar style={useStyles.friends} src="../../Assets/jim.jpg"/>

               
              </div>
              <Link to={'./'}> 
                  <Button color = 'red'>Log out</Button>
                </Link>
                <Link to={'./home'}> 
                  <Button primary>My Feed</Button>
                </Link>
            </Grid>

            <Grid item xs={7} style={useStyles.colStyle}>
              <div style={{margin: 10}}>
                <h3>My MovieBook</h3>
                <Divider orientation="horizontal"/>
                <br/>
                <div>
                  <Feed style = {useStyles.feedStyle} events={this.state.recommendations} />
                </div>
                <Link to={'./favouritesList'}> 
                  <Button secondary style={{margin: '2%'}}>
                      See All
                  </Button>
                </Link>
                <h3>Watch Later</h3>
                <Divider orientation="horizontal"/>
                <br/>
                <div>
                  <Feed style = {useStyles.feedStyle} events={this.state.watchlater} />
           	</div>
             <h3>Favourites List</h3>
                <Divider orientation="horizontal"/>
                <br/>
                <div>
                  <Feed style = {useStyles.feedStyle} events={this.state.favourites} />
           	</div>
	    	</div>
	    </Grid>	  
          </Grid>
          </Container>
        </div>
    );
  }
}

const useStyles = {
  avatar: {
    marginTop: 10,
    // marginLeft: '30%',
    // marginRight: '30%',
    left: '30%',
    width: 130,
    height: 130,
    boxShadow: ' 0px 10px 70px 0px #314455',

  },
  friends: {
    margin: 10,
    width: 80,
    height: 80,
    boxShadow: ' 0px 10px 40px 0px #314455',

  },
  colStyle: {
    alignText: 'center',
    backgroundColor: '#d3e3fc',
    marginTop: 20,
  },
  feedStyle: {
    position: 'relative',
    size: 'large',
    backgroundImage: 'linear-gradient(to bottom left, #FFFFFF, #d3e3fc)',
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: '25px',
    padding: '20px'
  }
  
}



export default Profile;
