import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbarParent">
      <div className="navbarItem">
        <Link to="/home">Home</Link>
      </div>
      <div className="navbarItem">
        <Link to="/games">Games</Link>
      </div>
      <div className="navbarItem">
        <Link to="/history">History</Link>
      </div>
      <div className="navbarItem">
        <Link to="/currentMatch">Current Match</Link>
      </div>
      <Outlet />
    </div>
  );
}
