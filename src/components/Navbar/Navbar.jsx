import React from "react";
import "./navbar.css";

const Navbar = ({ handleClose }) => {
  return (
    <nav className="nav-menu">
      <section className="close-icon" onClick={handleClose}>
        <span className="menu-icon bar-one"></span>
        <span className="menu-icon bar-two"></span>
      </section>
      <section className="list">
        <a href="/" className="list-item">
          Home
        </a>
        <a href="/form" className="list-item">
          Graduate Form
        </a>
        <a href="/graduates" className="list-item">
          Meet the Graduates
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
