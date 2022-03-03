import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ICountry } from "./../../interfaces/CountryData";

import "./country.css";

const Country = () => {
  const [country, setCountry] = useState({} as ICountry);
  const [borderCountry, setBorderCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  let navigate = useNavigate()
  const api_path = "https://restcountries.com/v2/";

  useEffect(() => {
    let mounted = true;

    const fetchCountryData = async () => {
      await axios.get(api_path + `name/${name}`).then((res) => {
        console.log("resdata", res.data[0]);
        setCountry(res.data[0]);
        if (mounted) {
          setLoading(false);
        }
      });
    };
    fetchCountryData();
    // setLoading(false);

    return () => {
      mounted = false;
    };
  }, [name]);

  const getCountryName = async (e:React.MouseEvent|null, code:string)=>{
    let mounted = true;

    await axios.get(api_path + `alpha/${code}`).then( (res)=>{
      console.log(res.data.name)
      setBorderCountry(res.data.name)
      if (mounted) {
        setLoading(false);
      }
      if(!loading && e) {
        navigate(`/countries/${res.data.name}`)
      }else if(!loading && !e){
        console.log('else')
        return res.data.name
      }
    })
  }

  return (
    <>
      {!loading && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <a href="/" className="btn btn-light">
                <i className="fa-solid fa-arrow-left"></i> Back Home
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <img className="card-img" src={country.flag} alt={name} />
                </div>
              </div>
            </div>

            <div className="col-md-8 details">
              <div className="row card">
                <h5 className="card-title">{country.name}</h5>
                <br />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="card-block">
                    <div className="card-body">
                      Native Name: <span>{country.name}</span>
                      <br />
                      {/* num.toLocaleString() add commas to numbers */}
                      {console.log(typeof country.population)}
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
                </div>
                <div className="col-md-6">
                  <div className="card-block">
                    <div className="card-body">
                      Top Level Domain: <span>{country.topLevelDomain}</span>
                      <br />
                      {/* {console.log(country.currencies[0].name)} */}
                      Currencies: <span>{country.currencies[0].name}</span>
                      <br />
                      {console.log(typeof country.languages)}
                      Languages: &nbsp;
                      {Object.values(country.languages).map((c) => {
                        // {console.log('c->',c)}
                        return <span key={c.name}>{c.name}, </span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-block">
                  Border Countries: &nbsp;
                  {/* {console.log(country.borders)} */}
                  {country.borders.map((border) => {
                    return (
                      <>
                        {/* <Link
                          // to={`/countries/${borderCountries}`}
                          to={}
                          key={border}
                          className="btn btn-light"
                          title={border}
                          onClick={()=>getCountryName(border)}
                        > */}
                        <button key={border} className="btn btn-light" onClick={(e)=>getCountryName(e, border)}>
                        {/* <Link
                          to={`/countries/${borderCountry}`}
                          // key={border}
                          className="btn btn-light"
                          title={border}
                        >  */}
                        {/* {getCountryName(null, border)} */}
                          {border}
                          {/* </Link> */}
                          
                          </button>
                        {/* </Link> */}
                        &nbsp;
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
