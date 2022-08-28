import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
     <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/shop/cart' element={<Cart/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
