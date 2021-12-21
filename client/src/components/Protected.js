import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
import Bulletin from "./Bulletin";
import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
import BulletinsSlice from "./BulletinsSlice";
import MyBulletins from "./MyBulletins";

const Protected = () => {
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    console.log(res.data);
    // let myUsers = res.data.filter ((u) => u.id !== auth.id )
    setUsers(res.data);
  };
  const renderUsers = () => {
    console.log(users);
    let myUsers = users.filter((u) => u.id !== auth.id);
    return myUsers.map((u) => {
      return (
        <Card style={{ margin: "10px" }}>
          <Image src={u.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{u.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <p>Contact: {u.email}</p>
          </Card.Content>
        </Card>
      );
    });
  };


  return (
    <div>
      {/* how can I pass the name through authentication? */}
      {/* <h2>{auth.name}'s Profile</h2> */}
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
      <p>My ID {auth.id}</p>
      <MyBulletins/>
      {/* <Link to={<ProfileForm id={auth.id}/>}>Edit Profile</Link> */}
      <div style={{ display: "flex", flexDiretion: "row" }}>
        <div>
          <h2>Other Users:</h2>
          <div
            style={{
              display: "flex",
              flexDiretion: "row",
              flexWrap: "wrap",
              float: "left",
              width: "50vw",
              flexGrow: "1",
            }}
          >
            {renderUsers()}
          </div>
        </div>
        <div>
          <h2>Bulletin Feed</h2>
          <Link to={`/api/bulletins/new`}>Post A Bulletin</Link>
          <BulletinsSlice />
          {/* <div style = {{display: 'flex', flexDiretion: 'column', flexWrap: 'wrap', margin: '10px', padding: '10px', flexGrow: '1' }}>{renderBulletins().slice(0,6)}</div> */}
          <Link to={`/api/bulletinsslice/`}>View All Bulletins</Link>
        </div>
      </div>

      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
