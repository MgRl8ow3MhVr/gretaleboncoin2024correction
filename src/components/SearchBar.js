import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <div className="orangeEllipse"></div>
      <form>
        <input></input>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
};
export default SearchBar;
