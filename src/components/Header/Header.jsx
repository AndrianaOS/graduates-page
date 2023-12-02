import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);
  const handleClose = () => setShowMenu(false);
  return (
    <header className="header-bar">
      Header
      {!showMenu && (
        <div className="icon" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </div>
      )}
      {showMenu && <Navbar handleClose={handleClose} showMenu={showMenu} />}
      <section className="menu-list">
        <a href="/">Home</a>
        <a href="/form">Graduate Form</a>
        <a href="/about">About me</a>
        <a href="/graduates">Meet the Graduates</a>
      </section>
    </header>
  );
};

export default Header;
