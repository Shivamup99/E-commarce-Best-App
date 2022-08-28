import React from 'react'
import {categoryData} from '../../rawData/categoryData'
import './category.scss'
const Category = () => {
  return (
    <div className='category'>
        <div className="category-row">
            {categoryData.map((item,i)=>(
                 <div className="category-col" key={i}>
                 <img src={item.img} alt="hd" />
                 <div className="category-content">
                     <span>{item.title}</span>
                     <button className='cat-btn'>Shop now</button>
                 </div>
             </div> 
            ))}
        </div>
    </div>
  )
}

export default Category