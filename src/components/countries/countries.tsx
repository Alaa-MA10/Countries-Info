import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./countries.css";
import { ICountry } from './../../interfaces/CountryData';
import Country from './../country/country';

const api_url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      await axios.get(api_url).then((res) => {
        console.log(res.data);
        setCountries(res.data);
      });
    };

    fetchCountries();
  }, []);

  return (
    <>
      <section className="countries">
      {/* <div className="container-fluid"> */}
        {/* <div className="container row"> */}
          {countries.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country;
            return (
              <div className="card " key={numericCode}>
                <Link
                  to={`/countries/${name}`}
                  key={numericCode}
                  className="card-link"
                >
                  <img className="card-img-top " src={flag} alt={name} />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <br />
                    <div className="card-text">
                      Population: <span>{population}</span>
                      <br />
                      Region: <span>{region}</span>
                      <br />
                      Capital: <span>{capital}</span>
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
