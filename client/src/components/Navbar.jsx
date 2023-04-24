import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
        <div><h1>The Rubric</h1></div>
          </Link>
        </div>
        <div className="links">
         
    <span>{currentUser?.moderitor_user_name}</span>
          {currentUser ? (
         <> 
          <Link className="link" to="/"> Home</Link>
         </>   
          ) : (
            <Link className="link" to="/welcome">
             Welcome
            </Link>  )}

          <Link className="link" to="/about">
          About
          </Link>
          <Link className="link" to="/contact">
           Contact
          </Link>
         
          <span>{currentUser?.moderitor_user_name}</span>
          {currentUser ? (
         <> 
         <Link className="link" to="/write">Create Rubric</Link>
         <Link onClick={logout} className="link" to="/home">Logout </Link>
         </>   
          ) : (
            <Link className="link" to="/login">
              Login
            </Link> )
          }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
