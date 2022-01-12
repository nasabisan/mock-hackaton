
import React, { useEffect, useState } from "react";

import img from '../../assets/blusa.png'
import categoryInteration from "./CategoryInteration";

const AllCategories = (props) => {

    let { category }= props;
   
//     const categories=["uno", "Dos", "Tres"];
    return (
        <div>
<p>holo</p>
                <div className='category-card'>
                <img className='categories-image' alt='category image'  src={category.imagen}/>
                <p className='category-title'>{category.description}</p>
                </div>
            
        </div>
    )
}

export default AllCategories
