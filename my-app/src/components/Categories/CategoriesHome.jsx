import React, { useEffect, useState } from "react";

import img from '../../assets/blusa.png'
import Categories from "./AllCategories";
import categoryInteration from "./CategoryInteration";

const CategoriesHome = (props) => {

    let { categoriesData }= props;
   
    //Falta solo sacar 3 categorias random y mostrarlas
   
//     const categories=["uno", "Dos", "Tres"];
    return (
        <div> 
            <section className='categories'>
            {categoriesData.length > 0 ? (
            categoriesData.map((cat) => (
                <div key={cat.id} className='category-cardHome'>
                <img className='category-imageHome' alt='category image'  src={cat.imagen} />
                <p className='category-titleHome'>{cat.description}</p>
                </div>
            ))
          ) : (
            <div className= "msg-empty">
                <h2 >No categories</h2>
              </div>
          )}
</section>
                
                
            
        </div>
    )
}

export default CategoriesHome