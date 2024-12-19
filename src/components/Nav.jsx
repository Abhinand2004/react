import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-moon">
        🌙
      </div>
    </nav>
  );
};

export default Navbar;
