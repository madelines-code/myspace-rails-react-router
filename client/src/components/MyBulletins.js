import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const MyBulletins = () => {
  const [users, setUsers] = useState([]);
  const [bulletins, setBulletins] = useState([]);
  const [myBulletins, setMyBulletins] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    setUsers(res.data)
    let bulletinsRes = await axios.get("/api/bulletins");
    console.log(bulletinsRes.data);
    setBulletins(bulletinsRes.data);
    let myBulletins = bulletinsRes.data.filter((b) => b.id === auth.id)
    setMyBulletins(myBulletins);
  };


  const renderBulletins = () => {
    return myBulletins.map((b)=>{
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
  };



  return (
    <div>
      <h1>Bulletins</h1>
      {renderBulletins()}
      </div>
  )
}

export default MyBulletins;