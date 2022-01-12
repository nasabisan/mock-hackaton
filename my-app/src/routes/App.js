import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";

import AddCategory from "../components/AddCategory";

import Footer from "../components/Footer";
import Promotions from "../components/Promotions";
import HomePage from "../components/HomePage/HomePage";
import AllCategories from "../components/Categories/AllCategories";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/AllCategories" element={<AllCategories />} />
          <Route exact path="/AddCategory" element={<AddCategory />} />
          <Route exact path="/Promotions" element={<Promotions />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
