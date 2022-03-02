import React from "react";

import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between ">
      <a className="navbar-brand" href="/" title="Home">
        Where in the World?
      </a>
      <a className="btn btn-light" href="/" role="button">
        <i className="fa fa-moon-o" aria-hidden="true"></i> 
        &nbsp; Dark Mode
      </a>
    </nav>
  );
};
