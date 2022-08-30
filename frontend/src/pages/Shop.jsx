import React from 'react'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
import ProductsShop from '../component/shop/ProductsShop'
import Footer from '../component/footer/Footer'
import './style/shop.scss'
const Shop = () => {
  return (
    <div className='shop'>
      <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
      <div className="shop-row">
        <div className="shop-col">
          <ProductsShop/>
        </div>
      </div>
      <div className="shop-footer">
      <Footer/>
      </div>
      
    </div>
  )
}

export default Shop