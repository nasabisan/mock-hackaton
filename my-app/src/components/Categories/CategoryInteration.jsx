import React from "react";
export const categoryInteration = (props) => {
  const { categories } = props;
  return (
    <>
      {categories.length > 0 ? (
        categories.map((cat) => (
          // <Categories
          //   key={cat.id}
          //   category={cat}  
          // />
          <div key={cat.id} className="category-card">
          <img className="categories-image" src={cat.imagen} alt="category" />
          <p className="category-title">{cat.description}</p>
        </div>
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