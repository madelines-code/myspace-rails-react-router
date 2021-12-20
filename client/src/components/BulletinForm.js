import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';


const BulletinForm = () => {

  // return (
  //   <div>
  //     <p>thing 1</p>
  //     <input />
  //   </div>
  // )
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // don't get fact for new form, only edit
    if (params.id) {
      getBulletin();
    }
  }, []);

  const getBulletin = async () => {
    try {
      let res = await axios.get(`/api/bulletins/${params.id}`);
      setHeader(res.data.header);
      setBody(res.data.body);
    } catch (err) {
      alert("err occurred getting bulletin");
    }
  };

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ header: header, body: body });
    const bulletin = { header: header, body: body };

    if (params.id) {
      // update logic here
      try {
        let response = await axios.put(`/api/bulletins/${params.id}`, bulletin);
        console.log(response.data);
        // need update UI (update response.data in items)
        navigate("/protected");
      } catch (err) {
        alert(`${err.response.data.errors}`);
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors);
      }
    } else {
      // creaete logic here
      // axios call here
      // save to database DONE
      try {
        let response = await axios.post("/api/bulletins", bulletin);
        navigate("/protected");
        // need update  (add response.data to items)
      } catch (err) {
        alert("err occured");
        console.log(err);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <h1>{params.id ? "Edit" : "New"} Bulletin </h1>
      <form onSubmit={handleSubmit}>
        <p>Header</p>
        <input value={header} onChange={(e) => setHeader(e.target.value)} />
        <p>Body</p>
        <input type='text' value={body} onChange={(e) => setBody(e.target.value)} />
        <button>{params.id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};


export default BulletinForm;