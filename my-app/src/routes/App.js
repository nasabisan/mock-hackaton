import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";

import AddCategory from "../components/Categories/AddCategory";

import Promotions from "../components/Promotions";
import HomePage from "../components/HomePage/HomePage";
import AllCategories from "../components/Categories/AllCategories";
import AllCategoriesFree from "../components/Categories/AllCategoriesFree";
import PromotionsAll from "../components/PromotionsAll";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/AllCategories" element={<AllCategories />} />
          <Route
            exact
            path="/AllCategoriesFree"
            element={<AllCategoriesFree />}
          />
          <Route exact path="/AddCategory" element={<AddCategory />} />
          <Route exact path="/Promotions" element={<Promotions />} />
          <Route exact path="/PromotionsAll" element={<PromotionsAll />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
