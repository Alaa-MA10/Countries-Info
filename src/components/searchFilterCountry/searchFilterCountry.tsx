import React from "react";
import "./searchFilterCountry.css";

type Props = {
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchFilterCountry: React.FC<Props> = ({
  searchOnChange,
  regionOnChange,
}) => {
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
            onChange={searchOnChange}
          />
        </div>
      </form>


      <div className="dropdown">
        <select className="btn btn-secondary" onChange={regionOnChange}>
          <option className="dropdown-item" value="">
            Filter by Region
          </option>
          <option className="dropdown-item" value="">
            All
          </option>
          <option className="dropdown-item" value="Africa">
            Africa
          </option>
          <option className="dropdown-item" value="Asia">
            Asia
          </option>
          <option className="dropdown-item" value="Europe">
            Europe
          </option>
          <option className="dropdown-item" value="Americas">
            Americas
          </option>
          <option className="dropdown-item" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </nav>
  );
};

export default SearchFilterCountry;
