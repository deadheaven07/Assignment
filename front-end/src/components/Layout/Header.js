import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle mouse movement and toggle navbar visibility
  const handleMouseMove = (e) => {
    if (e.clientY < 50) {
      setIsVisible(true); // Show navbar when mouse is near the top
    } else {
      setIsVisible(false); // Hide navbar when mouse is away from the top
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${
          isVisible ? "visible" : "invisible"
        }`}
        style={{ transition: "visibility 0.3s, opacity 0.3s" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../images/logopg1.png "
              alt="Logo"
              style={{ filter: "grayscale(100%) brightness(0)" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/project" className="nav-link">
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/uploadd" className="nav-link">
                  Upload
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/transcript" className="nav-link">
                  Transcript
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/setting" className="nav-link">
                  <img
                    src="../images/Icon.png"
                    alt="Account Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
