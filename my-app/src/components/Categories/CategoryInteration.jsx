import React from "react";
import Categories from "./AllCategories";


export const categoryInteration = (props) => {
  const { categories } = props;

  return (
    <>
      {categories.length > 0 ? (
        categories.map((cat) => (
          <Categories
            key={cat.id}
            category={cat}  
          />
        ))
      ) : (
        <div className= "msg-empty">
            <h2 >No orders</h2>
          </div>
      )}
    </>
  );
};

export default categoryInteration
