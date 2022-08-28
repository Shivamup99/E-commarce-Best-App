import React from 'react'
import { FavoriteBorder, LocalMall, Login } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-item">
        <span><NavLink to="/" activeClassName='active'>Home</NavLink></span>
        <span><NavLink to="/shop" activeClassName='active'>Shop</NavLink></span>
        <span><NavLink to="/about" activeClassName='active'>About</NavLink></span>
        <span><NavLink to="/contact" activeClassName='active'>Contact</NavLink></span>
      </div>
      <div className="nav-link">
        <div>
        <NavLink to="/auth/login" className="auth">
        <Login/>
        <span>Login</span>
        </NavLink>
        </div>
        <div className="nav-special">
          <FavoriteBorder/>
          <NavLink to='/shop/cart' activeClassName='active'><LocalMall/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar