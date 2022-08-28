import React from 'react'
import './bar.scss'
import {Person} from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbar-content">
        <div className="top-email">
         <img src="/images/gmail.png" alt="gmail" />
         <span>shivam@gmail.com</span>
        </div>
        <div className="top-user">
          <Person/>
          <span>Customer</span>
        </div>
      </div>
      <div className="topbar-social">
        <div className="social-image">
          <img src='/images/facebook.png' alt='facebook'/>
          <img src='/images/insta.png' alt='insta'/>
          <img src='/images/git.png' alt='git'/>
          <img src='/images/lindin.png' alt='linkdin'/>
        </div>
      </div>
    </div>
  )
}

export default Topbar