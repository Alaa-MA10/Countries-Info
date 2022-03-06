import React from "react";

type Handler = {
  themeToggleHandler: (mode: React.ReactText) => void;
  themeMode: React.ReactText;
};

export const NavBar: React.FC<Handler> = ({
  themeToggleHandler,
  themeMode,
}) => {
  return (
    <nav className="navbar navbar-expand justify-content-between main-bar">
      <a className="navbar-brand" href="/" title="Home">
        Where in the World?
      </a>
      <button
        className="btn theme-toggle"
        onClick={() =>
          themeToggleHandler(themeMode === "light" ? "dark" : "light")
        }
      >
        {themeMode === "light" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
        &nbsp; {themeMode === "light" ? "dark" : "light"} Mode
      </button>
    </nav>
  );
};
