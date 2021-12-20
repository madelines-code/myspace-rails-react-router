
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Card } from "semantic-ui-react";

const Bulletin = (props) => {
  const [header, setHeader] = useState("")
  const [body, setBody] = useState("")
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let res = await axios.get(`/api/bulletins/${params.id}`)
    setHeader(res.data.header)
    setBody(res.data.body)
  }

  console.log(props)
    return (
      <Card style = {{margin: '10px'}}>
        <Card.Content>
          <Card.Header>{header}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>{body}</p>
        </Card.Content>
      </Card>

    )
}
export default Bulletin;