import React from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import { 
  Button,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../App.css';
import BackgroundSlideshow from 'react-background-slideshow'
import { spacing } from '@material-ui/system'



class Register extends React.Component {

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

  
  addUser = async() => {
      const url = "/users";
      const newUser = {
	  email: this.state.username,
	  password: this.state.password
       }


       const request = new Request(url, {
           method: "POST",
	   body: JSON.stringify(newUser),
	   headers: {
		"Accept": "application/json, text/plain, */*",
		"Content-Type": "application/json"
	
           }
       });

       await fetch(request).then(function(res) {
           if (res.status === 200){
      		console.log(res.data)
		return res.data
           } else {
		throw("Could Not add new user")
	   }
       
       }).catch(error => { console.log(error);});
  }

  checkCreds = async (e) => {
    e.preventDefault();
    console.log(typeof(this.state.username), typeof("user"))
    console.log(this.state.username.valueOf() === "user")
    console.log(this.state.password.valueOf() === "user")
	  // Requires server call to ascertain user creds
    if (this.state.confirmPassword.valueOf() === this.state.password.valueOf()){
      this.props.history.push('/home')
       await this.addUser()
    } else {
      return this.setState({error: "Passwords do not match"})
    }

  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="MovieShare"> 
          </AppBar> 
            
            <div style={{display:'flex', flexDirection:'row', height: "100vh", backgroundImage: 'linear-gradient(to bottom left, #77a6f7, black)'}}>
              <Carousel  interval={3000} style={{padding:0, margin:0}}>
                  <Carousel.Item>
                    <div className="carouselPic" style={{height:"90vh"}}>
                    <img className="d-block h-100" src ='../../Assets/Movie-banner.jpg' alt = "First Slide"/>
                    </div>
                    <Carousel.Caption>
                      <h1>Discover what your friends are watching</h1>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="carouselPic" style={{height:"90vh"}}>
                      <img className="d-block h-100" src ='../../Assets/dunkirk-banner.jpg' alt = "Second Slide"/>
                    </div>
                      <Carousel.Caption>
                        <h1>Keep track of what to watch</h1>
                      </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="carouselPic" style={{height:"90vh"}}>
                      <img className="d-block h-100" src ='../../Assets/Joker-Banner2.jpg' alt = "Third Slide"/>
                    </div>  
                    <Carousel.Caption>
                      <h1>Get the hottest recommendations</h1>
                  </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            
            <Card style={{margin: 20, height: "500px",backgroundImage: 'linear-gradient(to bottom right, #FFFFFF, #d3e3fc)'}}>
              <CardContent style={{margin: 65}}>
                <TextField
                  id="username"
                  margin="dense"
                  hintText="New Username"
                  floatingLabelText="Username"
                  onChange = {(event, value) => this.setState({username:value})}
                  style={{marginRight: "10px"}}
                />
                <TextField
                    id="password"
                    variant="outlined"
                    type="password"
                    hintText="New Password"
                    floatingLabelText="New Password"
                    onChange = {(event, value) => this.setState({password:value})}
                    style={{marginRight: "10px"}}
                />
	   	<TextField
	    	    id="NewPassword"
	    	    variant = "outlined"
	    	    type="password"
	    	    hintText="Confirm New Password"
	    	    floatingLabelText="Confirm New Password"
	    	    onChange = {(event, value) => this.setState({confirmPassword:value})}
	    	    style={{marginRight: "10px"}}
	    	/>
	    	
                <p style ={ style.login }>{this.state.error}</p>
                <Button onClick={ this.checkCreds } style = { style.login }>
                  register
                </Button>
              </CardContent>
            </Card>
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
    marginRight: '10px',
    background: 'lightblue'
  },
};

export default Register;
