import React from "react";
import "./SearchBar.scss";

import plusIcon from "../../assets/icons/plus.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <input className="search__input" placeholder="Add a new task" />
      <button className="search__btn">
        <img src={plusIcon} alt="Add button" />
      </button>
    </div>
  );
};

export default SearchBar;
