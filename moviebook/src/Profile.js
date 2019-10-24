import React from 'react'

import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import { Grid, Avatar, Container, Divider } from '@material-ui/core'
import {Feed, Button, Rating} from 'semantic-ui-react'



class Profile extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
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
      }]
}

  render() {
    return (
        <div style={{backgroundColor: '#f3f3f3'}}>
          <Container maxWidth="xl">
          <Grid container justify="space-evenly">
            <Grid item xs={4} style={useStyles.colStyle} >
              <div style={{margin: 10}}>
                <Avatar style={useStyles.avatar} src="/johnson.jpg"/>
                <h1>Johnny Johnson</h1>
                <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                <h3>Friends</h3>
                <Avatar style={useStyles.friends} src="/tim.png"/>
                <h3>Statistics</h3>
                <pre>Movies rated: 3 <br/>
                  Average score: 3.75</pre>
              </div>
              <Link to={'./'}> 
                  <Button>Log out</Button>
                </Link>
                <Link to={'./home'}> 
                  <Button>My Feed</Button>
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
                <Link to={'./favouriteslist'}> 
                  <button style={{margin: '2%'}}>
                      See All
                  </button>
                </Link>
                <h3>Watch Later</h3>
                <Divider orientation="horizontal"/>
                <br/>
                <div>
                  <Feed style = {useStyles.feedStyle} events={this.state.watchlater} />
                </div>
                <Link to={'./recentlywatched'}> 
                  <button style={{margin: '2%'}}>
                      See All
                  </button>
                </Link>
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
  },
  friends: {
    margin: 10,
    width: 80,
    height: 80,
  },
  colStyle: {
    alignText: 'center',
    backgroundColor: '#F2F9FF',
    marginTop: 20,
  },
  feedStyle: {
    position: 'relative',
    size: 'large',
    background: 'white',
    marginLeft: '2%',
    marginRight: '2%',
  }
  
}



export default Profile;
