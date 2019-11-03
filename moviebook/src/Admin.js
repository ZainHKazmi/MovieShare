import React from 'react'

import { Link } from 'react-router-dom'
import {Feed, Header, Rating, Card, Button} from 'semantic-ui-react'


class Admin extends React.Component {
  state = {
	// Requires server call to populate the user list
	users: ["John doe", "John Smith", "Jack Jill"],
  }
 
  removeUser = (userIndex) => {
	  // Requires server call
      const updatedState = this.state.users.filter((user, index) => userIndex != index);
      this.setState({users: updatedState});
  };

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
	    <Header as="h2" style={titleStyle}>All Users</Header>
	     {this.state.users.map(
		(user, userIndex) =>(
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
			<Button onClick={()=>this.removeUser(userIndex)}>Remove</Button>
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
