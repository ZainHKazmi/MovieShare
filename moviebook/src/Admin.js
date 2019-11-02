import React from 'react'

import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Feed, Header, Rating, Card, Button} from 'semantic-ui-react'
// import components
import PostList from './PostList'
import Post from './Post'
import Login from './login'


class Admin extends React.Component {

  render(){
     return (
	<div>
    	    <Header as="h1" style={headerStyle}>
	     Admin
	     <Button.Group floated="right">  
	      <Link to={'./profile'}>   
	        <Button>Profile</Button>
	      </Link>
	     </Button.Group>
	     </Header>
	    <Header as="h2" style={titleStyle}>Users</Header>
	     {this.state.users.map(
		user =>(
	        <Card style = {adminUserAccess}>
	         <Card.Content>
	           <Card.Header>
	              <div>
	                {user}
	    	      </div>
	           </Card.Header>
		   <Card.Description>
		     <Button.Group floated="right"> 
			<Link to={'./profile'}>
			 <Button>Edit</Button>
			</Link>
			<Button>Remove</Button>
		    </Button.Group>
	           </Card.Description>
	         </Card.Content>
	        </Card>)
	        )
	     }
       
	</div>
     );
  }
}

const headerStyle = {
  color: '#FE8FB8', 
  textAlign: 'center',
  lineHeight: 2,
  fontSize: '50px',
  background: '#B7D8FE',
}
const titleStyle = {
	  color: '#000000',
	  textAlign: 'center',
	  lineHeight: 2,
	  fontSize: '30px',
}
const adminUserAccess = {
  position: 'relative',
  left: '42.5%', 
  
}
export default Admin;
