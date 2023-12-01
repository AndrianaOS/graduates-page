import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p id="creator">Created with ❤️ by Andriana</p>
      <p id="linkedin">
        Lets connect on:{" "}
        <a
          href="https://www.linkedin.com/in/andriana-saffo/"
          className="socials"
        >
          LinkedIn
        </a>
      </p>
      <p id="github">
        View my other code on:{" "}
        <a href="https://github.com/AndrianaOS" className="socials">
          GitHub
        </a>
      </p>
      <p id="portfolio">
        See my work on my:{" "}
        <a href="https://cv-portfolio.onrender.com/" className="socials">
          Portfolio
        </a>
      </p>
    </div>
  );
};

export default Footer;
