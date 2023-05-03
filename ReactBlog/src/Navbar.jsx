import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import Logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="main">
        <img src={Logo} alt="" width={75} />
        <div className="main-link">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
