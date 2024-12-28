import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/merc.jpg";

function LandingPage() {
  return (
    <>
      <div className="container px-8 flex items-center justify-center">
        <nav
          className="Navbar w-[95%] bg-black mx-auto flex items-center justify-between 
      "
        >
          <div className="logo">
            <img src={logo} alt="" width="40px" height="40px" />
          </div>
          <div className="navmenu">
            <p>
              <Link to="/home">Evaluation</Link>
            </p>
            <p>
              <Link to="/Services">Services</Link>
            </p>
            <p>
              <Link to="/about">About Us </Link>
            </p>
            <p>
              <Link to="/settings">Settings</Link>
            </p>
          </div>
          <div className="authentication">
            <button className="bg-blue-50 ">Login</button>
            <button>Sign Up</button>
          </div>
        </nav>

        <div className="heroPage">
          <div className="hero_Text">
            <h1>Need your Car valued? <br /> Talk to Us </h1>
          </div>
          <div className="Image"></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
