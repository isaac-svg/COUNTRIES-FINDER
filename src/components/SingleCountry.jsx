import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { URL } from "../assets/URL";
import Spinner from "../assets/Spinner";
import { ArrowBackSharp } from "@material-ui/icons";
const SingleCountry = () => {
  //
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  //
  const { countryName } = useParams();
  //
  //
  // console.log(countries);
  const getCountry = async (countryName) => {
    try {
      const results = await fetch(`${URL}/name/${countryName}`);
      setLoading(true);
      if (!results.ok) throw new Error("Results not found");
      const res = await results.json();
      const single = res.find((country) => country.name.common === countryName);
      setLoading(false);
      setCountries(single);
    } catch (error) {}
  };
  useEffect(() => {
    getCountry(countryName);
  }, [countryName]);
  //
  //

  return (
    <section className="wrapper">
      <Link className="back" to="/">
        <ArrowBackSharp /> Back
      </Link>
      <section className="singleContry-wrapper">
        {isLoading ? (
          <Spinner />
        ) : (
          <article className="content">
            <div>
              <div className="flag">
                <img
                  src={countries?.flags?.png}
                  alt={countries?.name?.common}
                />
              </div>
              <div className="description">
                <h2 className="country-Name">{countries?.name?.common}</h2>
                <div className="details">
                  <div className="left-details">
                    <h4>Native Name:{countries?.name?.common}</h4>
                    <h4>Population:{countries?.population}</h4>
                    <h4>Region:{countries?.region}</h4>
                    <h4>Sub Region:{countries?.subregion}</h4>
                    <h4>Capital:{countries?.capital}</h4>
                    {/* <h4>
                      currency:
                      {
                        JSON.stringify(countries?.currencies)
                          ?.split(",")
                          ?.join(":")
                          ?.split(":")[2]
                      }
                    </h4> */}
                    {/* <h4>
                      Languages:
                      {
                        JSON.stringify(countries?.languages)
                          ?.replace("{", "")
                          ?.replace("}", "")
                          ?.split(":")[1]
                      }
                    </h4> */}
                  </div>
                  <div className="right-details">
                    {/* <h4>Top Level Domain: {countries?.topLevelDomain}</h4> */}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <span className=" borders-wrapper">
              Border Countries:
              {countries?.borders?.map((border) => {
                return (
                  <div key={border?.capital}>
                    <div className="border">
                      <Link className="link" to={`/`}>
                        {" "}
                        {border}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </span>
          </article>
        )}
      </section>
    </section>
  );
};

export default SingleCountry;
