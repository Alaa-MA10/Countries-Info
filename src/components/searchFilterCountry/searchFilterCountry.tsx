import React from "react";
import "./searchFilterCountry.css";

const SearchFilterCountry = () => {
  return (
    <nav className="navbar navbar-light justify-content-between search-bar">
      <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <div className="inner-addon">
          <i className="fa fa-search" aria-hidden="true"></i>

          <input
            id="search-input"
            className="form-control"
            type="search"
            placeholder="Search for a country..."
            aria-label="Search"
          />
        </div>
      </form>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by Region
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              All
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Africa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              America
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Asia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Europe
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Oceania
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SearchFilterCountry;
