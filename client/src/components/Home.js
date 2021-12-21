import React from "react";
import { Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import mysaceHacked from "./mysaceHacked.png"


const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="frontPage">
      {/* can't get text to align center! */}
      <div className='frontText'>
        <h2 >Welcome to Myspace</h2>
      </div>
      <div style={{textAlign:'center'}}>
        <img src={mysaceHacked} alt='myspace logo'/>
      </div>
    </div>
  );
};


export default Home;
