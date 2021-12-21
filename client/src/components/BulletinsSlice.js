import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "semantic-ui-react";
import axios from "axios";


const BulletinsSlice = () => {
  const [users, setUsers] = useState([]);
  const [bulletins, setBulletins] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/users");
    setUsers(res.data)
    let bulletinsRes = await axios.get("/api/bulletins");
    console.log(bulletinsRes.data);
    setBulletins(bulletinsRes.data);
  };


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
  };



  return (
    <div>
      <div style = {styles.bulletins}>{location.pathname == '/protected' ? renderBulletins().slice(0,6) : renderBulletins()}</div>
      </div>
  )
}

const styles = {
  bulletins: {
    display: 'flex', 
    flexDiretion: 'column',
    flexWrap: 'wrap',
    margin: '10px', 
    padding: '10px',
    flexGrow: '1' }}

export default BulletinsSlice;