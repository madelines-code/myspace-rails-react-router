import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
import Bulletin from "./Bulletin";
import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";


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
    // let myUsers = res.data.filter ((u) => u.id !== auth.id )
    setUsers(res.data)
    let bulletinsRes = await axios.get("/api/bulletins");
    console.log(bulletinsRes.data);
    setBulletins(bulletinsRes.data);
  };
  const renderUsers = () => {
    console.log(users)
    let myUsers = users.filter ((u) => u.id !== auth.id)
    return (
      myUsers.map((u)=>{
      
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
    )};

  const renderBulletins = () => {
    return bulletins.map((b)=>{
      let author = users.find((u)=> u.id == b.author)
      // let author = users.filter((u)=> u.id === b.author)
      let authorName = author.name
      console.log(author.name)
      console.log(b)
      return (
        <Card style = {{margin: '10px'}}>
        <Card.Content>
          <Card.Header>{b.header}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>{b.body}</p>
        </Card.Content>
        <Card.Content>
          <p>Author: {author.name} </p>
        </Card.Content>
        <Link to={`/api/bulletins/${b.id}`} state = {{b}} {...b} >View Bulletin</Link>
        <Link to={`/api/bulletins/${b.id}/edit`} state = {{b}} >Edit</Link>
      </Card>
    )
    })
    // .slice(0,6)
  };



  return (
    <div>
      {/* how can I pass the name through authentication? */}
      {/* <h2>{auth.name}'s Profile</h2> */}
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image}/>
      <p>email: {auth.email}</p>
      <p>My ID {auth.id}</p>
      {/* <Link to={<ProfileForm id={auth.id}/>}>Edit Profile</Link> */}
      <div style={{display: 'flex', flexDiretion: 'row'}}>
        <div>
          <h2 >Other Users:</h2>
          <div style = {{display: 'flex', flexDiretion: 'row', flexWrap: 'wrap', float: 'left', width: '50vw', flexGrow: '1' }}>{renderUsers()}</div>
        </div>
        <div>
          <h2>Bulletin Feed</h2>
          <Link to={`/api/bulletins/new`} >Post A Bulletin</Link>
          <div style = {{display: 'flex', flexDiretion: 'column', flexWrap: 'wrap', margin: '10px', padding: '10px', flexGrow: '1' }}>{renderBulletins()}</div>
        </div>
      </div>
      
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
