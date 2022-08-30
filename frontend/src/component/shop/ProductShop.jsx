import React from 'react'
import './productShop.scss'
import { Visibility,Favorite,Shop } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const ProductShop = ({product}) => {
  return (
    <div className='product' style={{width:'320px'}}>
      <div className="card-img">
        <Link to={`/product/${product.slug}`}>
        <img src={product?.img} alt={product?.title}/>
        </Link>
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

export default ProductShop