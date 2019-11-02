 import React from 'react'                                  
 import { Link } from 'react-router-dom'
 import TextField from 'material-ui/TextField'
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  
import {Feed, Header, Rating, Card, Button} from 'semantic-ui-react' 
import AppBar from 'material-ui/AppBar'
class favouritesList extends React.Component {
    state = {
	favouritesList: ["Avengers EndGame", "The Hobbit", "The Nun", "Fifty Shades of Grey"],
     }

  render() {

	 return (
		<div>
		 {this.state.favouritesList.map(
		 movie=>(
	         <Card>
		 <Card.Content>
		 <Card.Header>{movie}</Card.Header>            
		 <Card.Description>

		</Card.Description>
	
		</Card.Content>
		</Card>)
		)
	     }  
	   </div>
	 );
  	}


/*
     render(){
	return (
	<div>
	    person
	    {this.favouritesList.list.map(movie => (<li id={movie}>{movie}</li>))}
	</div>
	);

     }
 */
 
 
 }

export default favouritesList;
