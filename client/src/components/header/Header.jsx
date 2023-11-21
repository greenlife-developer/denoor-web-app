import React, { useState } from "react";
import logo from "../../assets/image/image 10.png";
import logo1 from "../../assets/image/logo1.png";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./header.css";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = useState(false);

  const changeNavBar = () => {
    setVisible(!visible);
  };

  return (
    <div className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>
            <span>DEN</span>
            <span>OOR</span> <span>EDUCA</span>
            <span>TION</span> <span>FOUNDATION</span>{" "}
          </h1>
        </div>
        <div className={visible ? "nav-items hide" : "nav-items show"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="#donate">
                <button>Donate</button>
              </a>
            </li>
          </ul>
          <i
            onClick={changeNavBar}
            className={visible ? "ri-close-fill" : "ri-menu-line"}
          ></i>
        </div>
        <div className="menu-icon">
          <i
            onClick={changeNavBar}
            className={visible ? "ri-close-fill" : "ri-menu-line"}
          ></i>
        </div>
      </nav>
    </div>
  );
}
