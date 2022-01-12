import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";
import Header from "../Header/Header";
import NavBar from "../NavBar";
import CategoriesHome from "../Categories/CategoriesHome.jsx";
import Footer from "../Footer.jsx";

const HomePage = () => {
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

        {db && <CategoriesHome categoriesData={db} />}

        {/* {db && <CategoryInteration categories={db}/> }  */}
        {/* <footer> 2022 TOTAL LOOK all rights reserved.</footer> */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
