import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
        <Link className="navbar-brand text-light" to={"/"}>
          School App
        </Link>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-light" to={"/all-students"}>
                Students 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={"/add-student"}>
                New Student
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
