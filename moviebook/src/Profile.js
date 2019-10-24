import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { border } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import centerFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
// import UserProfile from 'react-user-profile'
// import { Link } from 'react-router-dom'
// import TextField from 'material-ui/TextField'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'

class Profile extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {

  }

  render() {
    // const photo = 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599'
    // const userName = 'Harvey Specter'
    // const location = 'New York, USA'
 
    // const comments = [
    //   {
    //     id: '1',
    //     photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
    //     userName: 'Mike Ross',
    //     content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
    //     createdAt: 1543858000000
    //   }
    // ]
    return (
        <div>
          <Container maxWidth="xl">
          <Grid container justify="space-evenly">
            <Grid item xs={4} style={useStyles.colStyle} >
                <Avatar style={useStyles.avatar} src="/johnson.jpg"/>
                <h1>Johnny Johnson</h1>
                <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                <h3>Friends</h3>
                <Avatar style={useStyles.friends} src="/tim.png"/>
                <h3>Statistics</h3>
                <pre>Movies rated: 1000 <br/>
                  Average score: 3.75</pre>
            </Grid>
            <Grid item xs={7}>
              <Paper className='paper'>
                k
              </Paper>
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
    marginLeft: '40%',
    marginRight: '30%',
    width: 80,
    height: 80,
  },
  friends: {
    margin: 10,
    width: 60,
    height: 60,
  },
  colStyle: {
    alignText: 'center',
    backgroundColor: '#f3f3f3',
    height: '100vh',
  }
  
}



export default Profile;
