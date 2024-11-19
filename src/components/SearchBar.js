import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="orangeEllipse"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Empécher la page de se recharger (comportement natif sur on submit)
        }}
      >
        <input></input>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
};
export default SearchBar;
