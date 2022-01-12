import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdministrator from "../Header/HeaderAdministrator";
import iconBack from "../../assets/iconBack.png";
import Footer from "../Footer";
const AddCategory = () => {
  const navigate = useNavigate();
  const handleBackCategories = () => {
    navigate("/AllCategories");
  };

  return (
    <div>
      <HeaderAdministrator />

      <div className="container-home">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" onClick={handleBackCategories}>
            <section className="nav-link">
              <img src={iconBack} alt="icon-back" className="icon-navBar"></img>
              Back to categories list
            </section>
          </li>
        </ul>

        <form className="form">
          <input
            type="url"
            className="input-categories"
            placeholder="Category Image"
          />
          <textarea
            type="text"
            className="input-categories"
            placeholder="Description"
          />
          <section>
            <button className="button" onClick={console.log("clicking")}>
              Save
            </button>
            <button className="button" onClick={console.log("clicking")}>
              Delete
            </button>
          </section>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddCategory;
