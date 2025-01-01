import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/merc.jpg";
import "./Navbar.css"
import Home from "../../Pages/LandingPage/LandingPage"
// import LandingPage from "../../Pages/LandingPage/LandingPage";

function Navbar() {
  return (
    <>
      <nav
        className="Navbar w-[95%] bg-white mx-auto flex items-center justify-between  
      "
      >
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="" width="40px" height="60px"  />
          </Link>
        </div>
        <div className="navmenu flex items-center justify-between w-[40%]">
          <p className="">
            <Link to="/evaluation">Evaluation</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="/about">About Us </Link>
          </p>
          <p>
            <Link to="/settings">Settings</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <div className="authentication w-[8%] flex items-center justify-between">
          <button className="bg-blue-50 ">
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signUp"> Signup</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
