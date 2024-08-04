import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">EcoIncentive</Link>
        <div className="navbar-links">
          <Link to="/individual">Individual</Link>
          <Link to="/enterprise">Enterprise</Link>
          <Link to="/investor">Investor</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;