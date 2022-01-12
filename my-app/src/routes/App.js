import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import ContentArea from "../components/HomePage";
import AddCategory from "../components/AddCategory";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<ContentArea />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/AddCategories" element={<AddCategory />} />
          <Route exact path="/Header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
