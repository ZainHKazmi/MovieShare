import React from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import { 
  Button,
  Card,
  Grid,
  CardContent,
} from '@material-ui/core'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../App.css';


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
            <AppBar title="MovieShare"/> 
            
            <div style = { style.carousel }>
              <Carousel className= "carousel" interval={3000}>
                <Carousel.Item>
                  <div className="carouselPic">
                  <img className="d-block h-100" src ='../../Assets/Movie-banner.jpg' alt = "First Slide"/>
                  </div>
                  <Carousel.Caption>
                    <h1>Discover what your friends are watching</h1>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src ='../../Assets/dunkirk-banner.jpg' alt = "Second Slide"/>
                    <Carousel.Caption>
                      <h1>Keep track of what to watch</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src ='../../Assets/Joker-Banner.jpg' alt = "Third Slide"/>
                  <Carousel.Caption>
                    <h1>Get the hottest recommendations</h1>
                </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <Card style={{width: '30%', height: '40%', margin: 'auto'}} raised={true}> 
            <CardContent style={{margin: "5%"}}>
              <TextField
                  id="username"
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange = {(event, value) => this.setState({username:value})}
              />
              <br/>
              <TextField
                  id="password"
                  type="password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event, value) => this.setState({password:value})}
              />
            
          
              <br/>
              <p style ={ style.login }>{this.state.error}</p>
              <Link to={this.state.next_page} >
                <Button onClick={ this.checkCreds } style = { style.login }>
                  sign in
                </Button>
              </Link>
            </CardContent>
            </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  carousel: {
    height: "-10%",
    width: "-4%"
  },
  login: {
    marginLeft: '37%',
    background: 'lightblue'
  }  
};

export default Login;
