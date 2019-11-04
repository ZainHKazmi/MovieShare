import React from 'react'                                  
import {Card, Feed, Header, Rating, Button} from 'semantic-ui-react' 
import { Link } from 'react-router-dom'   

class favouritesList extends React.Component {
    state = {
	favList: ["Avengers EndGame", "The Hobbit", "The Nun", "Fifty Shades of Grey"],
	favouritesList: [],
	 posts: [
	{
        date: '4 days ago',
        meta: <Rating defaultRating={5} maxRating={5} disabled /> ,
        header: 'The Avengers',
        image: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      },
      {
        date: '2 weeks ago',
        meta: <Rating defaultRating={5} maxRating={5} disabled /> ,
        header: 'Guardians of the Galaxy',
        image: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
      },
      {
        date: '1 month ago',
        meta: <Rating defaultRating={5} maxRating={5} disabled /> ,
        header: 'Avatar',
        image: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      },
    ]
     }


  render() {

	 return (
		<div>
		 <Header as="h1" style={headerStyle}>
		My MovieBook
		 <Button.Group floated="right">
                <Link to={'./'}> 
                  <Button>Log out</Button>
                </Link>
                <Link to={'./profile'}> 
                  <Button>Profile</Button>
                </Link>
              </Button.Group>
		</Header>
		 <Card.Group style = {cardStyle} items={this.state.posts} />
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
const cardStyle = {
  margin: '10px',
  position: 'relative',
  size: 'large',
  left: '20%',
  /*width: '45%',*/
}
const headerStyle = {
  color: '#FE8FB8', 
  textAlign: 'center',
  lineHeight: 2,
  fontSize: '50px',
  background: '#B7D8FE'
}
export default favouritesList;
