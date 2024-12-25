import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/merc.jpg"

function LandingPage() {
  return (
    <>
      <div className="container">
        <nav
          className="Navbar w-[95%] bg-black mx-auto flex items-center justify-between
      "
        >
          <div className="logo">
            <img src={logo} alt="" width="40px" height="40px" />
          </div>
          <div className="navmenu">
            <p>
              <Link to="/home">Evaluaton</Link>
            </p>
            <p> 
              <Link to="/Services">Services</Link>
            </p>
            <p>
              <Link to="/about">About Us </Link>
            </p>
            <p></p>
          </div>
          <div className="authentication"></div>
        </nav>
      </div>
    </>
  );
}

export default LandingPage;
