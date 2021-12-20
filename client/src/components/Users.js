import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Divider } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    setUsers(res.data);

  const renderUsers = () => {
    console.log(users)
    return users.map ((user)=> {
      return (
        <div>
        <Card>
          <Card.Content>
            <Card.Header>{user.email} </Card.Header>
            <Card.Meta>Gender: {user.gender}</Card.Meta>
            <Card.Description>
            Age: {user.age}
            </Card.Description>
            <Card.Description>
            ID: {user.id}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              {/* <Button onClick={()=> deleteUser(user.id)} basic color='red'>
                Delete
              </Button> */}
            </div>
          </Card.Content>
        </Card>
    </div>

      )
    })
  }

  // console.log(users)

  return (
    <div> 
      
      <h1> List of Users </h1>
      
      <Card.Group>{renderUsers()}</Card.Group>
    </div>
  )
  };
};

export default Users
