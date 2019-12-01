import React from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import { 
  Button,
  Card,
  Grid,
  CardContent,
  Typography
} from '@material-ui/core'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../App.css';
import BackgroundSlideshow from 'react-background-slideshow'
import { spacing } from '@material-ui/system'



class Login extends React.Component {

  constructor(props) {
    super(props);


    ///  React 'state'.  
    // Allows us to keep track of changing data in this component.
    this.state = {
      username: "",
      password: "",
      friends: [],
    }
    
}

  
  

  checkCreds = async (e) => {
    e.preventDefault();
    console.log(typeof(this.state.username), typeof("user"))
    console.log(this.state.username.valueOf() === "user")
    console.log(this.state.password.valueOf() === "user")
	  // Requires server call to ascertain user creds
    if (this.state.username.valueOf() === "user" && this.state.password.valueOf() === "user"){
      this.props.history.push('/home')
    } else if (this.state.username.valueOf() === "admin" && this.state.password.valueOf() === "admin"){
      this.props.history.push('/admin')
    } else {
      return this.setState({error: "Wrong credentials. Try again"})
    }

  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="MovieShare"> 
            <div style={{alignContent: 'right', marginTop: "-15px"}}>
            <TextField
                  id="username"
                  margin="dense"
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange = {(event, value) => this.setState({username:value})}
                  style={{marginRight: "10px"}}
            />
            <TextField
                id="password"
                variant="outlined"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event, value) => this.setState({password:value})}
                style={{marginRight: "10px"}}
            />
            {/* <p style ={ style.login }>{this.state.error}</p> */}
            <Button onClick={ this.checkCreds } style = { style.login }>
              sign in
            </Button>
            </div>
          </AppBar> 
          <div style={{display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
            <BackgroundSlideshow 
              images={[ 
                '../../Assets/Joker-Banner.jpg', 
                '../../Assets/dunkirk-banner.jpg', 
                '../../Assets/Movie-banner.jpg' ]}
              animationDelay={3000} 
              style={{height: "100vh"}}
            /> 
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  carousel: {
    marginTop: "10%",
    width: "100%",
    height: "90%"
  },
  login: {
    marginRight: '-15px',
    background: 'clear'
  },
};

export default Login;
