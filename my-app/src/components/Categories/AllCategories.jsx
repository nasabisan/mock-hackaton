import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";
//import { auth } from "../../lib/firebase";
import HeaderAdministrator from "../Header/HeaderAdministrator";
import iconAdd from "../../assets/iconAdd.png";
import CategoryInteration from "./CategoryInteration.jsx";
import Footer from "../Footer.jsx";
const AllCategories = () => {
    // const user= auth.currentUser;
    //console.log("soy user", user.email)
 // let { category } = props;
 const [db, setDbCategory] = useState(null);
 let url = `https://mock-hackaton.herokuapp.com/category`;
 let api = helpHttp();
 useEffect(() => {
   api.get(url).then((res) => {
     if (!res.err) {
       setDbCategory(res);
      //  console.log(res)
       // setError(null);
     } else {
       setDbCategory(null);
       // setError(res);
     }
   });
   //eslint-disable-next-line
 }, [url]);
  const navigate = useNavigate();
  const handleCategories = () => {
    navigate("/AddCategory");
  };
  //     const categories=["uno", "Dos", "Tres"];
  return (
    <div>
      <HeaderAdministrator />
      <div className="container-home">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" onClick={handleCategories}>
            <section className="nav-link">
              <img src={iconAdd} alt="icon-next" className="icon-navBar"></img>
              Add new Categories
            </section>
          </li>
        </ul>
      
      {/* {db && <ShowCategory categories={db}/> } */}
      <div className="category-card">
      {db && <CategoryInteration categories={db}/> }
      </div>
      </div>
      <Footer />
      {/* <div className="category-card">
        <img className="categories-image" src={category.imagen} alt="category" />
        <p className="category-title">{category.description}</p>
      </div> */}
    </div>
  );
};
export default AllCategories;














