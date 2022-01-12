import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import AddCategory from "../components/AddCategory";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/AddCategory" element={<AddCategory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
