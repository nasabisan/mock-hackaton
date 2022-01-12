import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdministrator from "./Header/HeaderAdministrator";
import iconAdd from "../assets/iconAdd.png";
const Categories = () => {
  const navigate = useNavigate();
  const handleCategories = () => {
    navigate("/AddCategory");
  };
  return (
    <div>
      <HeaderAdministrator />
      <>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" onClick={handleCategories}>
            <section className="nav-link">
              <img src={iconAdd} alt="icon-next" className="icon-navBar"></img>
              Add new Categories
            </section>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Categories;
