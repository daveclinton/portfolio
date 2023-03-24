import React from "react";
import "./Navbar.css";
import { FaMoon } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3`}
      >
        <div className="container">
          <a href="/" className={"navbar-brand"}>
            {props.brand}
          </a>

          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </div>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Commits
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  README.md
                </a>
              </li>
              <div
                className={` text-${props.mode === "light" ? "dark" : "light"}`}
              >
                <FaMoon onClick={props.toggleMode} cursor="pointer" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
