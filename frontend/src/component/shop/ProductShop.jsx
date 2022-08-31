import React,{useContext} from 'react'
import './productShop.scss'
import { Visibility,Favorite,Shop } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Store } from '../../store'
const ProductShop = ({product}) => {

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
        <Favorite className='fav' onClick={addToWish}/>
        <Shop className='shop' onClick={addToCart}/>
      </div>
    </div>
  )
}

export default ProductShop