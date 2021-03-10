import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="MainMenu">
        <ul className="MainMenu__Row">
          <li className="MainMenu__Item">
            <Link to="/">Home</Link>
          </li>
          {props.children}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
