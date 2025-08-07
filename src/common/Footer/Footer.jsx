import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <>
      <div className="eight-page">
        <div className="eight-content">
          <div className="eight-side-container">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
            <p className="logo-discription">
              Hotel comes with everything to get your business, Rolling. Take
              your chance to try our freemium theme and crack a mirror for your
              business. Because you're out of luck and in control with us.
            </p>
          </div>
          <div className="eight-center-container">
            <div className="center-footer">
              <h2 className="center-heading">Company</h2>
              <ul>
                <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/">Pricing</Link>
              </li>
              <li>
              <Link to="/footer">Contact</Link>
              </li>
              </ul>
            </div>
            <div className="center-footer">
              <h2 className="center-heading">Other pages</h2>
              <ul>
                <li>
              <Link to="/about">FAQs</Link>
              </li>
              <li>
              <Link to="/gallery">Gallery</Link>
              </li>
              <li>
              <Link to="/destination">Famous Places</Link>
              </li>
              <li>
              <Link to="/">Search result</Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="eight-footer">
        <p><span>Domain Name</span>. All Rights Reserved. Design by <span>Ghulam Mustafa</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
