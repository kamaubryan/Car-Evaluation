import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/merc.jpg";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="Navbar w-[98g%] mx-auto flex items-center justify-between p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)", // semi-transparent black background
      }}
    >
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="logo" width="40px" height="60px" />
        </Link>
      </div>

      {/* Hamburger Icon for Small Devices */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`navmenu flex items-center justify-between w-[40%] md:w-auto md:flex-row ${
          isMenuOpen ? "flex-col" : "hidden"
        } md:flex md:space-x-6`}
      >
        <p>
          <Link to="/evaluation">Evaluation</Link>
        </p>
        <p>
          <Link to="/services">Services</Link>
        </p>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
      </div>

      {/* Authentication Buttons */}
      <div className="authentication w-[8%] flex items-center justify-between">
        <button className="bg-blue-50">
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signUp">Signup</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
