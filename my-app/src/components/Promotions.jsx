import React from "react";
import Header from "./Header/Header";
import promotion1 from "../assets/promotion1.png";
import promotion2 from "../assets/promotion2.png";

const Promotions = () => {
  return (
    <div>
      <Header />
      <h1>View all categories</h1>
      <div className="promotion-container">
        <img src={promotion1} className="promotion-img" />
        <img src={promotion2} className="promotion-img" />
      </div>
    </div>
  );
};

export default Promotions;
