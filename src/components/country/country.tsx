import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICountry } from "./../../interfaces/CountryData";

import "./country.css";

const Country = () => {
  const api_path = "https://restcountries.com/v3.1/";

  const [country, setCountry] = useState({} as ICountry);
  // const [borderCountries, setBorderCountries] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    let mounted = true;

    const fetchCountryData = async () => {
      try {
        //Fetch all country-data
        await axios.get(api_path + `name/${name}`).then((res) => {
          // console.log("effect res_data: ", res.data[0]);
          setCountry(res.data[0]);

          // setBorderCountries(getBorderCountries(res.data[0].borders));
        });
      } catch (error) {
        console.log(error);
      }
      if (mounted) {
        setLoading(false);
      }
    };

    fetchCountryData();

    return () => {
      mounted = false;
    };
  }, [name]);

  //get border-country-Name from given border-country-code
  const getBorderCountries = (countryBorders: string[]) => {
    // retrieve from localstorage
    // localStorage.getItem() can return either a string or null. JSON.parse() requires a string
    const allCountries = JSON.parse(localStorage.getItem("countries") || "{}");
    // console.log("local:", allCountries);

    let countryBordersName = [];

    // console.log(typeof countryBorders)
    for (let countryCode of countryBorders) {
      for (let country of allCountries) {
        if (countryCode === country.cca3) {
          countryBordersName.push({
            countryCode: country.cca3,
            countryName: country.name.common,
          });
        }
      }
    }

    // console.log(
    //   "typeof countryBordersName return: ",
    //   typeof countryBordersName,
    // );
    return countryBordersName;
  };

  // if (!loading) {
  //   // console.log("borderCountries: ", borderCountries)
  // }

  return (
    <>
      {/* if Loading Done! */}
      {!loading && (
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-2">
              <a href="/" className="btn btn-secondary">
                <i className="fa fa-arrow-left"></i> Back Home
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-5">
              <div className="card">
                <div className="card-block">
                  <img
                    className="card-img"
                    src={country.flags.svg}
                    alt={country.name.common}
                  />
                </div>
              </div>
            </div>

            {/* gap between flag and details */}
            <div className="col-md-1"></div>
            {/* Country Details */}
            <div className="col-xs-12 col-md-6 details">
              <div className="row">
                <div className="card">
                  <h2 className="card-title">{country.name.common}</h2>
                  <br />

                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <div className="card-body">
                        Native Name:{" "}
                        {Object.values(country.name.nativeName).map(
                          (native_n) => (
                            <span key={native_n.common}>
                              {native_n.common},{" "}
                            </span>
                          ),
                        )}
                        <br />
                        Population:{" "}
                        <span>{country.population.toLocaleString()}</span>
                        <br />
                        Region: <span>{country.region}</span>
                        <br />
                        Sub Region: <span>{country.subregion}</span>
                        <br />
                        Capital: <span>{country.capital}</span>
                      </div>
                    </div>

                    <div className="col-xs-12 col-md-6">
                      <div className="card-body">
                        Top Level Domain: <span>{country.tld}</span>
                        <br />
                        Currencies:{" "}
                        {Object.values(country.currencies).map((currency) => {
                          return (
                            <span key={currency.name}>{currency.name} , </span>
                          );
                        })}
                        <br />
                        {/* {console.log(" country.languages: ", country.languages)} */}
                        Languages:{" "}
                        {Object.values(country.languages).map((language) => {
                          return <span key={language}>{language}, </span>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="card-body">
                      Border Countries: {" "}
                      {getBorderCountries(country.borders).map(
                        (countryBorder) => {
                          return (
                            <>
                              <a
                                href={`/countries/${countryBorder.countryName}`}
                                className="btn btn-secondary btn-sm"
                                title={countryBorder.countryName}
                                key={countryBorder.countryCode}
                              >
                                {countryBorder.countryName}
                              </a>
                              &nbsp;
                            </>
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Country Details */}
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
