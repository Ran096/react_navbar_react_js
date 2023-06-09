import react from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
export default function Navber() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-item">
          <NavLink exact to="/">
            Logo
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink exact to="/AboutUs">
            AboutUs
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink exact to="/Blog">
            Blog
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink exact to="/Services">
            Services
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink exact to="/ContactUs">
            ContactUs
          </NavLink>
        </div>
      </nav>
    </>
  );
}
