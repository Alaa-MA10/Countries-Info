import React from "react";
import { Link } from "react-router-dom";

import "./countries.css";
import { CountryProps } from "./../../interfaces/CountryData";

const Countries: React.FC<CountryProps> = ({ countries }) => {
  return (
    <>
      <div className="container-fluid px-4">
        <div className="row">
          {Object.values(countries).map((country) => {
            return (
              <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                <div className="card" key={country.cca3}>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Countries;
