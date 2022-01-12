import React from "react";
import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp.js";
//import { auth } from "../../lib/firebase";
import CategoryInteration from "./CategoryInteration.jsx";
import Footer from "../Footer.jsx";
import Header from "../Header/Header.jsx";
const AllCategoriesFree = () => {
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


  //     const categories=["uno", "Dos", "Tres"];
  return (
    <div>
      <Header />
      <div className="container-home">
        {/* {db && <ShowCategory categories={db}/> } */}
        <div className="category-card">
          {db && <CategoryInteration categories={db} />}
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
export default AllCategoriesFree;
