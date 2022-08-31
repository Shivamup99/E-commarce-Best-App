import React, { useContext } from 'react'
import { FavoriteBorder, LocalMall, Login } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { Store } from '../../store';

const Navbar = () => {
  const {state} = useContext(Store)
  const {cart,wish} = state

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
        <Badge badgeContent={wish.wishItems.length} color='primary'>
          <FavoriteBorder/>
        </Badge>
          <NavLink to='/shop/cart' activeClassName='active'>
            <Badge badgeContent={cart.cartItems.length}  color="secondary">
            <LocalMall/>
            </Badge>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar