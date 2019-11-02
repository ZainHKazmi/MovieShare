import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './login';
import Profile from './Profile';
import Home from './Home';
import Admin from './Admin';
// import FriendProfile from './FriendProfile';
import favouritesList from './favouritesList';

function App() {
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
	{/* <Route exact path='/friendprofile' component={FriendProfile}/>
        <Route exact path='/favouriteslist' component={FavouritesList}/> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
