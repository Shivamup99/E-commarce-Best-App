import React from 'react'
import Footer from '../component/footer/Footer'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
import './message.scss'
const MessageBox = (props) => {
  return (
    <>
      <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
    <div className='message'>
     <h2>{props.children}</h2>
    </div>
    <Footer/>
    </>
    
  )
}

export default MessageBox