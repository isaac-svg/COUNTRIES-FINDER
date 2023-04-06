import { SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";

const Search = ({ onSearch, onSelect }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <article className="sort">
      <div className="form-div">
        <form className="form" onSubmit={handleSearch}>
          <button type="submit">
            <SearchRounded />
          </button>
          <input
            type="text"
            placeholder="search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      {/*  */}
      <div className="select-div">
        <select name="" id="select" onChange={handleChange}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </article>
  );
};

export default Search;
