import React, { useState, useEffect } from "react";
import { URL } from "../assets/URL";
import Search from "./Search";
import Spinner from "../assets/Spinner";
import { Link } from "react-router-dom";

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);
    const results = await fetch(`${URL}/all`);
    const res = await results.json();
    setLoading(false);
    setCountries(res);
    console.log(res);
  };
  // filter Counter
  const getCountryByName = async (CountryName) => {
    try {
      const results = await fetch(`${URL}/name/${CountryName}`);
      setLoading(true);
      if (!results.ok) throw new Error("Results not found");
      const res = await results.json();
      setCountries(res);
      setLoading(false);
    } catch (error) {}
  };

  //
  const getCountryByRegion = async (Region) => {
    try {
      const results = await fetch(`${URL}/subregion/${Region}`);
      setLoading(true);
      if (!results.ok) throw new Error("Results not found");
      const res = await results.json();
      setCountries(res);
      setLoading(false);
    } catch (error) {}
  };

  //
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="Container">
      <Search onSearch={getCountryByName} onSelect={getCountryByRegion} />
      {loading && <Spinner />}

      <section className="home-page">
        {countries?.map((country) => {
          return (
            <article
              className="country"
              key={`${country.capital}+${country.name.common}`}
            >
              <Link to={`/${country.name.common}`}>
                <img src={country.flags.png} alt={country.name.common} />
                <div className="description">
                  <h2 className="country-name">{country.name.common}</h2>
                  <h4 className="small-content">
                    Population: <span>{country.population}</span>
                  </h4>
                  <h4 className="small-content">
                    Region: <span>{country.region}</span>
                  </h4>
                  <h4 className="small-content">
                    Capital: <span>{country.capital}</span>
                  </h4>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export { CountriesPage as default };
