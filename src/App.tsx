import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/navbar/navbar";
import Main from "./components/main/main";
import Country from "./components/country/country";
// import { axios } from 'axios';

function App() {


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
