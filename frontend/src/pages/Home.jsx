import React from 'react'
import './style/home.scss'
import Navbar from '../component/bar/Navbar'
import Topbar from '../component/bar/Topbar'
import Slider from '../component/slider/Slider'
import Banner from '../component/banner/Banner'
import Category from '../component/category/Category'
import Products from '../component/product/Products'
import NewsLetter from '../component/footer/NewsLetter'
import Footer from '../component/footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
      <div className="home-slider">
        <Slider/>
      </div>
      <div className="home-banner">
        <Banner />
      </div>
      <div className="home-category">
        <Category/>
      </div>
      <div className="home-products">
        <Products/>
      </div>
      <div className="home-footer">
        <NewsLetter/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home