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
    </header>
  );
};

export default Header;
