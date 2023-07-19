import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import footerLogl from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main">
        <div className="inner">
          <div className="fotoerLinks">
            <Link to="/flexi-blocks/">
              <img src={footerLogl} alt="" />
            </Link>
          </div>
          <div className="fotoerLinks">
            <h1>Quick Links</h1>
            <ul>
                <li>
                    <Link to="/flexi-blocks/" className="links">Home</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links">blog</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links">Contact</Link>
                </li>
            </ul>
          </div>
          <div className="fotoerLinks">
            <h1>Legal Stuff</h1>
            <ul>
                <li>
                    <Link to="/flexi-blocks/" className="links">privacy policy</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links">cookie policy</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links">terms of uses</Link>
                </li>
            </ul>
          </div>
          <div className="fotoerLinks">
            <h1>social media</h1>
            <ul>
                <li>
                    <Link to="https://github.com/MQasim34/flexi-blocks" target="_blank" className="links"><i class="bi bi-github"></i> github</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links"> <i class="bi bi-twitter"></i> twitter</Link>
                </li>
                <li>
                    <Link to="/flexi-blocks/" className="links"><i class="bi bi-instagram"></i> instagram</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
