import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";


const Rubrics = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/posts"); 
        setPosts(res.data);
       console.log(res)
      } catch (err) {
        console.log("from posts " + err);
      }
    };

    fetchData();
  },[]);
  const navigate = useNavigate();

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    
    <div className="home">
      <div className="posts">
        <div className="rtitle" id="fix" >
        <h2>Rubrics</h2>
           </div>
      
           <button class="button-72" id='joinrub'>Create Rubric</button>
        {/* {posts && posts.map((rubric) => (
          <div className="rubric" key={rubric.rubric_id}>
              <div><p>Title: {rubric.rubric_title}</p></div>
              <Link className="link" to={`/${rubric.rubric_id}`}>
              <button>Open</button>
              </Link>
             
           </div>
        ))} */}
        {
        
        }
      </div>
    </div>
  );
};

export default Rubrics;
