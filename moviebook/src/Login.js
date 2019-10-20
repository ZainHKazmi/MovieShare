import React from 'react'

import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Login extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
    username: "",
    friends: []
  }

  render() {
    return (
        <div>
            <MuiThemeProvider>
              <div>
                <AppBar title="Login"/>    
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,value) => this.setState({username:value})}
                    style = { style }
                />
                <br/>
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    style = { style }
                />
              </div>
            </MuiThemeProvider>
            <br/>
            <Link to={'./home'}> { /* This element will link the URL path to /queue */ }
                <button style = { style }>
                    sign in
                </button>
            </Link>
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
