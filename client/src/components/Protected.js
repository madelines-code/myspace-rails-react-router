import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";


const Protected = () => {
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    console.log(res.data);
    let myUsers = res.data.filter ((u) => u.id !== auth.id )
    setUsers(myUsers)
  };
  const renderUsers = () => {
    console.log(users)
    return users.map((u)=>{
      return (
        <Card>
        <Image src={u.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{u.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>Contact: {u.email}</p>
        </Card.Content>
    
      </Card>
    )
    })
  };

  return (
    <div>
      
      <h2>Protected</h2>
      <p>email: {auth.email}</p>
      <p>My ID {auth.id}</p>
      <p>{JSON.stringify(auth)}</p>
      <p>Other Users:</p>
      <div style = {{display: 'flex', flexDiretion: 'row', flexWrap: 'wrap'}}>{renderUsers()}</div>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
