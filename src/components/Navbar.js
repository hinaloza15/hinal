import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4 sticky-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-3">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>

          </ul>


          <div className="d-flex align-items-center">
            <a href="https://github.com/hinaloza15" target="_blank" rel="noreferrer" className="nav-icon mx-2 nav-item" style={{textDecoration:'None'}}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:hinaloza15@gmail.com" className="nav-icon mx-2 nav-item" style={{textDecoration:'None'}}>
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/hinal-oza-93633b223/" target="_blank" rel="noreferrer" className="nav-icon mx-2 nav-item" style={{textDecoration:'None'}}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/hinaloza/" target="_blank" rel="noreferrer" className="nav-icon mx-2 nav-item" style={{textDecoration:'None'}}>
              <i className="fa-solid fa-code"></i>
            </a>
          </div>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
