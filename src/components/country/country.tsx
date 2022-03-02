import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICountry } from './../../interfaces/CountryData';

const Country = () => {
  const [country, setCountry] = useState({} as ICountry);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
         await axios.get(`https://restcountries.com/v2/name/${name}`)
        .then( (res)=>{
            console.log('resdata',res.data)
            setCountry(res.data)
        })
    };

    fetchCountryData();

  }, [name]);

  
  return (
    <>
    {console.log(country.name)}
    <h1>{country.name}</h1>
  
    </>
  );
};

export default Country;
