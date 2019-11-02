 import React from 'react'  
 import { Link } from 'react-router-dom'
 import TextField from 'material-ui/TextField'
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
 import AppBar from 'material-ui/AppBar' 
 
class recentlyWatched extends React.Component {
     state = {
	     moviesWatched: ["Avengers EndGame", "The Hobbit", "The Nun", "Fifty Shades of Grey"],
     }
     
      render(){
	return (
	<div>      
	    {this.moviesWatched.list.map(movie => (<li id={movie}>{movie}</li>))}
	</div>
	);

     }
 
 
 
 }

export default recentlyWatched;
