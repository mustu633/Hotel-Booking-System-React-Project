import React, { useState } from "react";
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/footer">
                <button className="primary-btn">Request a Quotes</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>


      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="icons">
                <i className="fa fa-clock-o icon-style"></i>
              </div>
              <div className="text">
                <h4>Working</h4>
                <Link to='/footer'>Monday - Sunday: 9:00am to 6:00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fa fa-volume-control-phone icon-style"></i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to='/footer'>+923444444444</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fa fa-envelope icon-style"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to='/footer'>info@abc.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
