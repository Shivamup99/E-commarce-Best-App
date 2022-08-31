import React, { useContext, useState } from 'react'
import './modal.scss'
import {Close} from '@mui/icons-material';
import { Store } from '../../../store';
const ProductModal = ({product}) => {
    const [selectedImage,setSelectedImage] = useState('')
    const [style,setStyle] = useState('main-div')

    const {state,dispatch:ctxDispatch} = useContext(Store)
    const {wish} = state
    const addToCart =()=>{
         ctxDispatch({
            type:'CART_ADD_ITEM',
            payload:{...product,quantity:1}
         });
    }

    const addToWish =()=>{ 
    const existItem = wish.wishItems.find((x)=>x._id===product._id)
    const quantity = existItem ? existItem.quantity:1
    if(existItem){
      window.alert('Allready added')
      return;
    }
      ctxDispatch({
          type:'WISH_ADD_ITEM',
          payload:{...product,quantity}
      })
  }

    const changeStyle =()=>{
        setStyle('main-divOne')
    }
    
  return (
    <div className={style}>
      <div className="modal">
        <div className="modal-row">
            <div className="modal-images">
                <div className="modal-top-img">
                    <img src={selectedImage || product?.img} alt={product.title}/>
                </div>
            <div className="modal-bottom-img">
               <img src={product.img ? product.img:product.img} onClick={()=>setSelectedImage(`${product.img}`)} alt={product.title}/>
               <img src={product.img1 ? product.img1:product.img} onClick={()=>setSelectedImage(`${product.img1 ? product.img1:product.img}`)} alt={product.title}/>
               <img src={product.img2 ? product.img2:product.img} onClick={()=>setSelectedImage(`${product.img2 ? product.img2:product.img}`)} alt={product.title} />
               <img src={product.img3 ? product.img3:product.img} onClick={()=>setSelectedImage(`${product.img3 ? product.img3:product.img}`)} alt={product.title}/>
            </div>
            </div>
        </div>
        <div className="modal-row">
            <div className="first-div">
                <h2>{product.title}</h2>
                <p>Category: <b>{product.category}</b></p>
            </div>
            <div className="second-div">
                <span>Price: <b>$</b>{product.price}</span>
                <div className="quantity">Quantity: <b>1</b></div>
            </div>
            <div className="third-div">
                <div className="desc">{product.desc}</div>
            </div>
            <div className="fourth-div">
                <button className='cart' onClick={addToCart} >Add to Cart</button>
                <button className="wish" onClick={addToWish}>Add to Wish</button>
            </div>
        </div>
      </div>
      <button className='back' onClick={changeStyle}>
        <Close/>
      </button>
    </div>
  )
}

export default ProductModal