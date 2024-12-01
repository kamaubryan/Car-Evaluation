import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </nav>
    </>
  );
}

export default LandingPage