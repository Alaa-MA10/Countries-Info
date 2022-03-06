import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/navbar/navbar";
import Main from "./components/main/main";
import Country from "./components/country/country";
import axios from "axios";
import useTheme from "./hooks/useTheme";

function App() {
  const api_url = "https://restcountries.com/v3.1/all";

  // useTheme Hook
  const [themeMode, setThemeMode] = useTheme();

  useEffect(() => {
    const fetchCountries = async () => {
      await axios.get(api_url).then((res) => {
        // save the whole response as a string to localStorage
        localStorage.setItem("countries", JSON.stringify(res.data));
      });
    };

    fetchCountries();
  }, []);


  return (
    <Router>
      <NavBar themeMode={themeMode} themeToggleHandler={setThemeMode}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
