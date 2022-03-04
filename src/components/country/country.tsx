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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <a href="/" className="btn btn-light">
                <i className="fa fa-arrow-left"></i> Back Home
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <img
                    className="card-img"
                    src={country.flags.svg}
                    alt={country.name.common}
                    // key={country.ccn3}
                  />
                </div>
              </div>
            </div>

            {/* Country Details */}
            <div className="col-md-8 details">
              <div className="row card">
                <h5 className="card-title">{country.name.common}</h5>
                <br />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="card-block">
                    <div className="card-body">
                      Native Name: &nbsp;
                      {/* {console.log('native name: ', country.name.nativeName)} */}
                      {Object.values(country.name.nativeName).map(
                        (native_n) => (
                          <span key={native_n.common}>{native_n.common}, </span>
                        ),
                      )}
                      {/* {console.log('native names: ', typeof country.name.nativeName)} */}
                      <br />
                      {/* num.toLocaleString() add commas to numbers */}
                      Population:
                      <span>{country.population.toLocaleString()}</span>
                      <br />
                      Region: <span>{country.region}</span>
                      <br />
                      Sub Region: <span>{country.subregion}</span>
                      <br />
                      Capital: <span>{country.capital}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-block">
                    <div className="card-body">
                      Top Level Domain: <span>{country.tld}</span>
                      <br />
                      Currencies: &nbsp;
                      {Object.values(country.currencies).map((currency) => {
                        return (
                          <span key={currency.name}>{currency.name} , </span>
                        );
                      })}
                      <br />
                      {/* {console.log(" country.languages: ", country.languages)} */}
                      Languages: &nbsp;
                      {Object.values(country.languages).map((language) => {
                        return <span key={language}>{language}, </span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-block">
                  Border Countries: &nbsp;
                  {/* {console.log(country.borders)} */}
                  {/* {console.log(typeof borderCountries)} */}
                  {getBorderCountries(country.borders).map((countryBorder) => {
                    return (
                      <>
                        <a
                          href={`/countries/${countryBorder.countryName}`}
                          className="btn btn-light"
                          title={countryBorder.countryName}
                          key={countryBorder.countryCode}
                        >
                          <span>{countryBorder.countryName}</span>
                        </a>
                        &nbsp;
                      </>
                    );
                  })}
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
