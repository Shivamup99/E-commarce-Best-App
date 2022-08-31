import React from 'react'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
import Footer from '../component/footer/Footer'
import './style/cart.scss'
import { useContext } from 'react'
import { Store } from '../store'
import { Link } from 'react-router-dom'
import { Add, Delete, Remove } from '@mui/icons-material'

const Cart = () => {
  const {state,dispatch:ctxDispatch} = useContext(Store)

  const{
    cart:{cartItems},
  } = state;

  return (
    <>
     <div className='cart'>
       <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
      <div className="cart-container">
        <div className="cart-title">
          <h2>Your Cart</h2>
        </div>
        <div className="cart-row">
          <div className="cart-left">
           {cartItems.length===0 ? (<h3 className='info'>Cart is empty . <Link to='/shop'>Go Shopping</Link></h3>)
           :(
            <div className="cart-cards">
              {cartItems.map((item,i)=>(
                <div className="cart-card" key={i}>
                  <div className="cart-header">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="cart-body">
                    <div className="title">
                    <Link to={`/product/${item.slug}`}>{item.title}</Link>
                    </div>
                  <div className="buttons">
                    <button className='add' disabled={item.quantity===1}><Add/></button>
                    <span className='cart-quantity'>{item.quantity}</span>
                    <button className='minus' disabled={item.quantity===10}><Remove/></button>
                  </div>
                  <div className="carts-footer">
                    <div className="cart-price"><b>$</b> {item.price}</div>
                    <button><Delete/></button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
           ) 
          }
          </div>
          <div className="cart-right">
            <div className="checkout-card">
              <div className="checkout-body">
               <h3>Subtoatal ({cartItems.reduce((a,c)=>a+c.quantity,0)}{" "}items : ${
                cartItems.reduce((a,c)=>a+c.price * c.quantity,0)
               })</h3>
              </div>
              <div className="checkout-footer">
               <h2>Proceed To Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cart-footer">
    <Footer/>
    </div>
    </>
  )
}

export default Cart