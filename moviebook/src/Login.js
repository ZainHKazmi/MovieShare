import React from 'react'

import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import './App.css';

class Login extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
    username: "",
    password: "",
    friends: [],
    userLoggedIn: false,
    adminLoggedIn: false,
  }
  

  checkCreds = (e) => {
    e.preventDefault();
    if (this.state.username === "user" && this.state.password === "user"){
      this.setState({ next_page: '/home' })
      this.setState({ userLoggedIn: true })
    } else if (this.state.username === "admin" && this.state.password === "admin"){
      this.setState({ next_page: '/admin' })
      this.setState({ adminLoggedIn: true })
    } 
    console.log(this.state)

  }

  render() {
    if (this.state.userLoggedIn){
      return (
        <Home />
      );
    } 

    if (this.state.adminLoggedIn) {
      // return <Admin />
    }

    return (
        <div>
            <MuiThemeProvider>
              <AppBar title="Login"/>   
              <div>
              <Carousel className= "carousel" interval={3000}>
                <Carousel.Item>
                  <div className="carouselPic">
                  <img className="d-block h-100" src ='Movie-banner.jpg' alt = "First Slide"/>
                  </div>
                  <Carousel.Caption>
                    <h1>Discover what your friends are watching</h1>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src ='dunkirk-banner.jpg' alt = "Second Slide"/>
                    <Carousel.Caption>
                      <h1>Keep track of what to watch</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src ='Joker-Banner.jpg' alt = "Third Slide"/>
                  <Carousel.Caption>
                    <h1>Get the hottest recommendations</h1>
                </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </div>
              <div> 
                <TextField
                    id="username"
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,value) => this.setState({username:value})}
                    style = { style }
                />
                <br/>
                <TextField
                    id="password"
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,value) => this.setState({password:value})}
                    style = { style }
                />
              </div>
            </MuiThemeProvider>
            <br/>
            {/* <Link to={this.state.next_page}>  */}
                <button onClick={ this.checkCreds } style = { style }>
                    sign in
                </button>
            {/* </Link> */}
        </div>
    );
  }
}

const style = {
    position: 'relative', 
    left: '25%', 
    top: '25%',
};

export default Login;
