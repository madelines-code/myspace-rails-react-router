import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";


const Protected = () => {
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [bulletins, setBulletins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    console.log(res.data);
    let myUsers = res.data.filter ((u) => u.id !== auth.id )
    setUsers(myUsers)
    let bulletinsRes = await axios.get("/api/bulletins");
    console.log(bulletinsRes.data);
    setBulletins(bulletinsRes.data);
  };
  const renderUsers = () => {
    console.log(users)
    return users.map((u)=>{
      return (
        <Card  style = {{margin: '10px'}}>
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

  const renderBulletins = () => {
    return bulletins.map((b)=>{
      let author = users.filter((u)=> u.id == b.author)
      // let author = users.filter((u)=> u.id === b.author)
      let authorName = author[0].name
      console.log(author);
      console.log(author[0].name);
      return (
        <Card style = {{margin: '10px'}}>
        <Card.Content>
          <Card.Header>{b.header}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>{b.body}</p>
        </Card.Content>
        <Card.Content>
          <p>Author: {author[0].name} </p>
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
      <div>
        <h2>Other Users:</h2>
        <div style = {{display: 'flex', flexDiretion: 'row', flexWrap: 'wrap'}}>{renderUsers()}</div>
      </div>
      <div>
        <h2>Bulletin Feed</h2>
        <div style = {{display: 'flex', flexDiretion: 'column', flexWrap: 'wrap', margin: '10px', padding: '10px'}}>{renderBulletins()}</div>
      </div>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
