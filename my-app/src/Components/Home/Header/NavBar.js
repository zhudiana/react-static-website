import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import {
  FaCaretDown,
  FaExternalLinkAlt,
  FaSistrix,
  FaRegUser,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="NavbarItems">
      <ul className="nav-menu">
        <nav>
          <NavLink to="/">
            <img
              src="https://razor.com/wp-content/themes/razor/assets/images/logo.png"
              alt="logo"
              className="nav-logo"
            />
          </NavLink>
          <NavLink to="/Products" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">
              PRODUCTS <FaCaretDown className="dropDownIcon" />
            </li>
          </NavLink>
          <NavLink to="/RazorTv" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">
              RAZOR TV <FaCaretDown className="dropDownIcon" />
            </li>
          </NavLink>
          <NavLink to="/SupportParts" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">
              SUPPORT & PARTS <FaCaretDown className="dropDownIcon" />
            </li>
          </NavLink>
          <NavLink to="/Blog" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">BLOG </li>
          </NavLink>
          <NavLink to="/RazorMicro" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link" style={{ color: "#e50d02" }}>
              RAZOR MICROMOBILITY <FaExternalLinkAlt className="dropDownIcon" />{" "}
            </li>
          </NavLink>
        </nav>
      </ul>
      <ul className="right_nav">
        <FaSistrix className="right_icon" />
        <FaRegUser className="right_icon" />
        <FiShoppingCart className="right_icon" />
        <img
          src="https://razor.com/wp-content/themes/razor/assets/images/us-flag.png"
          alt="flag"
          className="nav-flag"
        />
      </ul>
    </div>
  );
};

export default NavBar;
