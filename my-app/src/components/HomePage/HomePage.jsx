import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";
import Header from "../Header/Header";
import NavBar from "../NavBar";
import CategoriesHome from "../Categories/CategoriesHome.jsx";
import Footer from "../Footer.jsx";
import Promotions from "../Promotions.jsx";
import { useNavigate } from "react-router-dom";
import iconNext from "../../assets/iconNext.png"

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategories = () => {
    navigate("/AllCategoriesFree");
  };
  const [db, setDbCategory] = useState(null);

  let url = `https://mock-hackaton.herokuapp.com/category`;

  let api = helpHttp();

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setDbCategory(res);
        // console.log(res)
        // setError(null);
      } else {
        setDbCategory(null);
        // setError(res);
      }
    });
    //eslint-disable-next-line
  }, [url]);

  return (
    <>
      <Header />

      <div className="container-home">
        <NavBar />
        <Promotions />
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={handleCategories}>
          <section className="nav-link">
            <img src={iconNext} alt="icon-next" className="icon-navBar"></img>
            See all products
          </section>
        </li>
      </ul>
        {db && <CategoriesHome categoriesData={db} />}

        {/* {db && <CategoryInteration categories={db}/> }  */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
