import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Recycling 
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/group">
                  Group
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myaccount">
                  My Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/donate">
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;