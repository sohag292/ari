import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Knowledge Cafe</a>
          <div className="d-flex" id="navbarSupportedContent">
              <button className="btn btn-success">Click me </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
