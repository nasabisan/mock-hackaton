import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdministrator from "./Header/HeaderAdministrator";
import iconBack from "../assets/iconBack.png";
const AddCategory = () => {
  const navigate = useNavigate();
  const handleBackCategories = () => {
    navigate("/Categories");
  };

  return (
    <div>
      <HeaderAdministrator />
      <>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" onClick={handleBackCategories}>
            <section className="nav-link">
              <img src={iconBack} alt="icon-back" className="icon-navBar"></img>
              Back to categories list
            </section>
          </li>
        </ul>
      </>
    </div>
  );
};

export default AddCategory;
