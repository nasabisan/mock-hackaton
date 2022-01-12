import React from "react";

import promotion1 from "../assets/promotion1.png";
import promotion2 from "../assets/promotion2.png";
import Header from "./Header/Header";
import Footer from './Footer';

const PromotionsAll = () => {
  return (
    <div>
    <Header />
    <div className="container-home">
      <div className="promotion-container">
        <img src={promotion1} alt="promotion one" className="promotion-img" />
        <img src={promotion2} alt="promotion two" className="promotion-img" />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PromotionsAll;
