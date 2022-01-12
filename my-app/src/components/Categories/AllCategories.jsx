import React from "react";

const AllCategories = (props) => {
  let { category } = props;

  //     const categories=["uno", "Dos", "Tres"];
  return (
    <div>
      <p>holo</p>
      <div className="category-card">
        <img className="categories-image" src={category.imagen} alt="category" />
        <p className="category-title">{category.description}</p>
      </div>
    </div>
  );
};

export default AllCategories;
