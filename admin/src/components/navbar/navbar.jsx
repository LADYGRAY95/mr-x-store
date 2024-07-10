import React from 'react';
import './navbar.css'
import logo from "../../assets/logo.png";
import pfp from "../../assets/pfp.png";

const Navbar = () => {
    return (
        <nav className="navbar">
  <div className="nav-logo-wrapper">
    <img className="nav-logo" src={logo} alt="Logo"/>
  </div>
  <div className="nav-profile-wrapper">
    <img className="nav-profile" src={pfp} alt="Profile"/>
  </div>
</nav>
    );
};

export default Navbar;