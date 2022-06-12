import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import {FaArrowCircleRight } from "react-icons/fa";


const Nav = () => {
  const history=useHistory()
  const Logout=()=>{
    localStorage.clear();
    history.push('/login')
  }
  return (
    <div className="">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            Resume Builder
          </a>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a style={{
                cursor:"pointer"
              }} className="nav-link text-white"  onClick={()=>{Logout()}}>
                Logout <FaArrowCircleRight/> 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
