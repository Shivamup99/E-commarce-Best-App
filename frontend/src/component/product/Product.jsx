import React, { useState } from 'react'
import './product.scss'
import {Favorite, Shop, Visibility} from '@mui/icons-material';
import ProductModal from './modal/ProductModal';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
  const [openModal,setOpenModal] = useState(false)
  return (
    <div className='product'>
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
        <Visibility className='visible' onClick={()=>setOpenModal(true)}/>
        <Favorite className='fav'/>
        <Shop className='shop'/>
      </div>
      {openModal && 
      <ProductModal product={product}/>}
    </div>
  )
}

export default Product