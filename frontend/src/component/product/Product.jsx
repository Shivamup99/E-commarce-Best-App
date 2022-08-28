import React from 'react'
import './product.scss'
import {Favorite, Shop, Visibility} from '@mui/icons-material';
const Product = ({product}) => {
  return (
    <div className='product'>
      <div className="card-img">
        <img src={product?.img} alt={product?.title}/>
      </div>
      <div className="card-body">
        <h3 className="title">{product.title}</h3>
        <span><b>$</b> {product.price}</span>
      </div>
      <div className="card-footer">
        <Visibility className='visible'/>
        <Favorite className='fav'/>
        <Shop className='shop'/>
      </div>
    </div>
  )
}

export default Product