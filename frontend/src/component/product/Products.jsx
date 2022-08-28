import React from 'react'
import { latestProduct } from '../../rawData/latestProduct'
import Product from './Product'
import './product.scss'
const Products = () => {
  return (
    <div className='products'>
      <h2>Latest Products</h2>
      <div className="products-row">
      {latestProduct.slice(0,8).map((item,index)=>(
            <Product product={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Products