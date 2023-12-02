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
        <a href="/">Home</a>
        <a href="/form">Graduate Form</a>
        <a href="/about">About me</a>
        <a href="/graduates">Meet the Graduates</a>
      </section>
    </nav>
  );
};

export default Navbar;
