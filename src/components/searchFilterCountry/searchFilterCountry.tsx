import React from "react";

type Handler = {
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchFilterCountry: React.FC<Handler> = ({
  searchOnChange,
  regionOnChange,
}) => {

  return (
    <nav className="navbar justify-content-between search-bar">
      {/* Search-Field */}
      <div className="col-5 col-md-4">
        <div className="col-12">
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
        </div>
      </div>
      {/* End Search-Field */}
      {/* Region-Filter */}
      <div className="col-4 col-md-3">
        <div className="dropdown">
          <select className="btn" onChange={regionOnChange}>
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
      </div>
      {/* End Region-Filter */}
    </nav>
  );
};

export default SearchFilterCountry;
