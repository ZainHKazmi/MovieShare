import React from 'react'                                  
import {Card} from 'semantic-ui-react' 

class favouritesList extends React.Component {
    state = {
	  // Requires server call
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
