import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../images/logo.webp";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);
  const handleClose = () => setShowMenu(false);
  return (
    <header className="header-bar">
      <img src={logo} alt="logo" className="logo"/>
      {!showMenu && (
        <div className="icon" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </div>
      )}
      {showMenu && <Navbar handleClose={handleClose} showMenu={showMenu} />}
      <section className="menu-list">
        <a href="/" className="list-item">
          Home
        </a>
        <a href="/form" className="list-item">
          Graduate Form
        </a>
        <a href="/about" className="list-item">
          About me
        </a>
        <a href="/graduates" className="list-item">
          Meet the Graduates
        </a>
      </section>
    </header>
  );
};

export default Header;
