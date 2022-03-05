import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./countries.css";
import { CountryProps, ICountry } from "./../../interfaces/CountryData";

const Countries:React.FC<CountryProps> = ({countries}) => {
  // const [countries, setCountries] = useState({} as ICountry);

  // useEffect(() => {
  //   const allCountries = JSON.parse(localStorage.getItem("countries") || "{}");
  //   setCountries(allCountries);
  // }, []);

  return (
    <>
      <section className="countries">
        {/* <div className="container-fluid"> */}
        {/* <div className="container row"> */}
        {Object.values(countries).map((country) => {
          return (
            <div className="card " key={country.cca3}>
              <Link
                to={`/countries/${country.name.common}`}
                className="card-link"
              >
                <img
                  className="card-img-top "
                  src={country.flags.svg}
                  alt={country.name.common}
                />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <br />

                  <div className="card-text">
                    Population:{" "}
                    <span>{country.population.toLocaleString()}</span>
                    <br />
                    Region: <span>{country.region}</span>
                    <br />
                    Capital: <span>{country.capital}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Countries;
