import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-row">
        <div className="footer-col">
            <h1>My Shop</h1>
            <p>Get Latest Online Gadgets at Universal Gadgets where you can get latest designs of phone covers, screen protector, selfie sticks and much more gaming equipment at affordable prices.</p>
        </div>
        <div className="footer-col">
            <h2>Quick Links</h2>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>Shop</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
        <div className="footer-col">
            <h2>Category Options</h2>
            <ul>
                <li>
                    <NavLink to='/'>Men</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Women</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Kids</NavLink>
                </li>
            </ul>
        </div>
        <div className="footer-col">
        <h2>Stay in touch</h2>
        <div className="social-image">
          <img src='/images/facebook.png' alt='facebook'/>
          <img src='/images/insta.png' alt='insta'/>
          <img src='/images/git.png' alt='git'/>
          <img src='/images/lindin.png' alt='linkdin'/>
        </div>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2022. All rights reserved. Powerd by Shivam </p>
      </div>
    </div>
  )
}

export default Footer