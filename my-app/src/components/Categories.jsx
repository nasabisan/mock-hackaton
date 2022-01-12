import React from 'react'
import img from '../assets/blusa.png'

const Categories = () => {
    const categories=["uno", "Dos", "Tres"];
    return (
        <div>

            <section className='categories'>
               
                <div className='category-card'>
                <img className='categories-image' alt='category image' src={img} />
                <p className='category-title'>titulo categ  oria</p>
                </div>
                
            </section>
            <h1>Categories</h1>
        </div>
    )
}

export default Categories
