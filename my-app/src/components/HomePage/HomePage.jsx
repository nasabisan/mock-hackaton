import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";
import Header from "../Header/Header";
import NavBar from "../NavBar";
import CategoriesHome from "../Categories/CategoriesHome.jsx";

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
    <div>
      <Header />
      <p>home</p>
      <NavBar />

      {db && <CategoriesHome categoriesData={db} />}

      {/* {db && <CategoryInteration categories={db}/> }  */}
      
    </div>
  );
};

export default HomePage;
