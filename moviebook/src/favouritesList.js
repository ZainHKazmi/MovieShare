 import React from 'react'                                  
 import { Link } from 'react-router-dom'
 import TextField from 'material-ui/TextField'
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  
import AppBar from 'material-ui/AppBar'
class favouritesList extends React.Component {
    state = {
	favouritesList: ["Avengers EndGame", "The Hobbit", "The Nun", "Fifty Shades of Grey"],
     }
     render(){
	return (
	<div id="favouritesList">      
	    {this.favouritesList.list.map(movie => (<li id={movie}>{movie}</li>))}
	</div>
	);

     }
 
 
 
 }

export default favouritesList;
