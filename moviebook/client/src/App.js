import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './Views/Login';
import Profile from './Views/Profile';
import Home from './Views/Home';
import Admin from './Views/Admin';
import Register from './Views/Register';
// import FriendProfile from './FriendProfile';
import favouritesList from './Components/favouritesList';

class App extends Component {

  state = {
    data: null
  };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
          { /* Each Route below shows a different component depending on the exact path in the URL  */ }
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/favouritesList' component={favouritesList}/>
	  <Route exact path='/register' component={Register}/>
          {/* <Route exact path='/friendprofile' component={FriendProfile}/>
            <Route exact path='/favouriteslist' component={FavouritesList}/> */}
        </Switch>
      </BrowserRouter>
      </div>
    );
  }

}

export default App;
