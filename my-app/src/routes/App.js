import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";

import AddCategory from "../components/AddCategory";
import Categories from "../components/Categories/AllCategories";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/AddCategories" element={<AddCategory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
