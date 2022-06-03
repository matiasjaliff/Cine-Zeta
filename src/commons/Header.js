import React from "react";

const Header = ({ type }) => {
  return (
    <header>
      <h2>{type === "inTheaters" ? "In theaters right now" : "Search results"}</h2>
    </header>
  );
};

export default Header;
