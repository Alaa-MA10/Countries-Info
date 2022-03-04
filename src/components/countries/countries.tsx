import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./countries.css";
import { ICountry } from "./../../interfaces/CountryData";
import Country from "./../country/country";

const api_url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState({} as ICountry);

  useEffect(() => {
    const fetchCountries = async () => {
      await axios.get(api_url).then((res) => {
        // console.log(res.data);
        setCountries(res.data);

        // save the whole response as a string to localstorage
        localStorage.setItem('countries', JSON.stringify(res.data))
      });
    };

    fetchCountries();
    
  }, []);

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
