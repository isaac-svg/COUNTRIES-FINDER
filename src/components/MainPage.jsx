import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import CountriesPage from "./CountriesPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import SingleCountry from "./SingleCountry";
import Navbar from "./Navbar";
//
const MainPage = () => {
  const { isDark } = useContext(ThemeContext);
  if (isDark) {
    localStorage.setItem("isDark", isDark);
  } else {
    localStorage.setItem("isLight", !isDark);
  }
  return (
    <main className={isDark ? "darkTheme" : "lightTheme"}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/:countryName" element={<SingleCountry />} />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default MainPage;
