import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
  <div className="header_top_section">
    <div className="container">
      <div className="header_main">
        <div className="location_text"><img src="images/map-icon.png" /><span className="padding_left_10"><a
              href="#">Location</a></span></div>
        <div className="location_text center"><img src="images/call-icon.png" /><span className="padding_left_10"><a href="#">Call
              ; 01 1234567890</a></span></div>
        <div className="location_text right"><img src="images/mail-icon.png" /><span className="padding_left_10"><a
              href="#">demo@gmail.com</a></span></div>
      </div>
    </div>
  </div>
  <div className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="logo" to="/"><img src="images/logo.png" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/repair">Repair</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="search_icon"><a href="#"><img src="images/search-icon.png" /></a></div>
          </form>
        </div>
      </nav>
    </div>
  </div>
  
  </div>
  );
}
export default Header;