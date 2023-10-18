import React from 'react';
import './navbar.css'; // Import CSS file
// import logo from './logo.png'; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.025)",
          color: "white",
          letterSpacing: "0.4rem",
          height: "4vh",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          fontSize: "2.5rem",
          fontFamily: "fantasy",
          fontWeight: "500",
          paddingTop: "0.5rem",
          paddingLeft: "2rem",
          marginTop:'-0.3rem'
        }}
      >
        Rudhir
      </div>
      
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/refer" className="navbar-link">Refer</a></li>
        <li className="navbar-item"><a href="/donor" className="navbar-link">Donor</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
