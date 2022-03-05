import React, { useState } from "react";
import Countries from "../countries/countries";
import SearchFilterCountry from "../searchFilterCountry/searchFilterCountry";
import { useEffect } from "react";
import { ICountry } from "./../../interfaces/CountryData";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [countries, setCountries] = useState([]);

  // Passing HTMLInputElement as a generic to the event type
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // search-input case-insensitive
    setSearchInput(e.target.value.toLowerCase());
  };

  // Passing HTMLSelectElement as a generic to the event type
  const regionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionSelect(e.target.value);
  };

  const filterCountries = (fullCountries: any) => {
    // return a new countries-array by filtering the original countries-array
    return (
      fullCountries
        // filter by search-field
        .filter((country: ICountry) => {
          //if no input(searchText empty) the return the original
          if (searchInput === "") {
            return country;
          }
          //return the country which contains the search-input
          else {
            return country.name.common.toLowerCase().includes(searchInput);
          }
        })
        // filter by selected-Region
        .filter((country: ICountry) => {
          // if no-select OR select(All)
          if (regionSelect === "") {
            return country;
          }
          // return the country which contains the selected-Region
          else {
            return country.region.startsWith(regionSelect);
          }
        })
    );
  };

  useEffect(() => {
    const allCountries = JSON.parse(localStorage.getItem("countries") || "{}");
    setCountries(allCountries);
  }, []);

  return (
    <>
      <SearchFilterCountry
        searchOnChange={searchHandler}
        regionOnChange={regionHandler}
      />
      <Countries countries={filterCountries(countries)} />
    </>
  );
};

export default Main;
