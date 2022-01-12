import React from "react";
import { useNavigate } from "react-router-dom";
//import { auth } from "../../lib/firebase";
import HeaderAdministrator from "../Header/HeaderAdministrator";
import iconAdd from "../../assets/iconAdd.png";


const AllCategories = () => {
    // const user= auth.currentUser;
    //console.log("soy user", user.email)
 // let { category } = props;
  const navigate = useNavigate();
  const handleCategories = () => {
    navigate("/AddCategory");
  };

  //     const categories=["uno", "Dos", "Tres"];
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
      {/* <div className="category-card">
        <img className="categories-image" src={category.imagen} alt="category" />
        <p className="category-title">{category.description}</p>
      </div> */}
    </div>
  );
};

export default AllCategories;
