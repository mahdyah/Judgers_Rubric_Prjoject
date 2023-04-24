import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const rubric_id = location.pathname.split("/")[1];
console.log(rubric_id)
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${rubric_id}`);
        setPost(res.data);

        console.log( res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${rubric_id}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="rubric_form">
    
       
        <div className="moderator">
        
          {/* {currentUser.moderator_id=== post.moderator_id && ( */}
       
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          

<>
            <h1>{post.rubric_title}</h1> 
            <p> {post.question_number}</p>
            <p> {post.question}</p>
            <p>{post.option_one}</p>
            <p> {post.option_two}</p>
            <p> {post.option_three}</p>
            <p> {post.option_four}</p>
            <p> {post.option_five}</p>
            
            </>
        </div>
    
    </div>
  );
};

export default Single;
