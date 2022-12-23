import React from "react";
import "./header.css";
import Plane from "./images/travel.png";

const Header = () => {
  return (
    <header>
      <img src={Plane} alt="Plane" />
      <span>my travel journal.</span>
    </header>
  );
};

export default Header;
