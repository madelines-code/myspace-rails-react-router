import React from "react";
import { Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home!</h2>
      {JSON.stringify(auth)}

    </div>
  );
};

export default Home;
