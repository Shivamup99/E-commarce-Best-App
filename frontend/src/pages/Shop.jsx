import React from 'react'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
const Shop = () => {
  return (
    <div className='shop'>
      <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
    </div>
  )
}

export default Shop