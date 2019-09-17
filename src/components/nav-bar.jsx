import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info navbar-fixed-top">
          <h2 className="navbar-brand">Welcome to React </h2>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right bold">
              <li>
                <Link to={"/"} className="nav-link">
                
                </Link>
              </li>
              <li>
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/api"} className="nav-link">
                  API
                </Link>
              </li>
              <li>
                <Link to={"/hooks"} className="nav-link">
                  Hooks
                </Link>
              </li>
              <li>
                <Link to={"/regForm"} className="nav-link">
                  RegForm
                </Link>
              </li>
              <li>
                <Link to={"/getEmp"} className="nav-link">
                  Emp
                </Link>
              </li>
              <li>
                <Link to={"/hoc"} className="nav-link">
                  HOC
                </Link>
              </li>
            </ul>
          </div>
        </nav>        
      </div>
    );
  }
}
export default NavBar;
