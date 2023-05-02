import React from "react";
import { Link,NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="main-nav">
      {/* <Link to="/" >Home</Link>
      <Link to="/aboutUs" >About Us</Link> */}

      <NavLink to="/" >Home</NavLink>
      <NavLink to="/aboutUs" >About Us</NavLink>
      <NavLink to="/history" >History</NavLink>
      <NavLink to="/members" >Members</NavLink>
    </nav>
  );
}

export default NavBar;
