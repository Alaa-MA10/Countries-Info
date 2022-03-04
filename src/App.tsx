import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/navbar/navbar";
import Main from "./components/main/main";
import Country from "./components/country/country";
// import { axios } from "axios";

function App() {
  // const [countryName, setCountryName] = useState("");

  // const api_path = "https://restcountries.com/v2/";

  
  // const getCountryName = (code: string) => {
  //   axios.get(api_path + `alpha/${code}`)
  //   .then((res) => {
  //     console.log(res.data.name);
  //     setCountryName(res.data.name);
  //   });
  // };

  // useEffect( () => {

  //   getCountryName()
  // }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
