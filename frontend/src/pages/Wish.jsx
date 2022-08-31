import React from 'react'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
import Footer from '../component/footer/Footer'
import './style/wish.scss'
import { useContext } from 'react'
import { Store } from '../store'

const Cart = () => {
  const {state,dispatch:ctxDispatch} = useContext(Store)

  const{
    wish:{wishItems},
  } = state;

  return (
    <>
     <div className='wish'>
       <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
      <div className="wish-container">
        <div className="wish-row">
          <h2>Your Wish</h2>
        </div>
        <div className="wish-row">
          <div className="wish-col">

          </div>
          <div className="wish-col">
            
          </div>
        </div>
      </div>
    </div>
    <div className="wish-footer">
    <Footer/>
    </div>
    </>
  )
}

export default Cart