import React, { useReducer } from 'react'
import { useEffect } from 'react'
import Product from './Product'
import axios from 'axios'
import './product.scss'
import logger from 'use-reducer-logger'
import MessageBox from '../../utils/MessageBox'

const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state,loading:true}
    case 'FETCH_SUCCESS':
      return {...state,products:action.payload,loading:false}
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload}
    default:
      return state
  }
}

const Products = () => {
  const [{loading,error,products},dispatch] = useReducer(logger(reducer),{
    loading:true,
    error:'',
    products:[]
  })

  useEffect(()=>{
    const fetchProduct =async()=>{
      dispatch({type:'FETCH_REQUEST'})
      try {
        let response = await axios.get('http://localhost:5000/api/product')
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
      } catch (error) {
        dispatch({type:'FETCH_FAIL',payload:error.message})
      }
    }
    fetchProduct()
  },[])

  return (
    <div className='products'>
      <h2>Latest Products</h2>
      <div className="products-row">
        {loading ? (<h1>LOADING....</h1>):error?(<MessageBox>{error}</MessageBox>):(
      products.slice(-8).map((item,index)=>(
            <Product product={item} key={index}/>
        )))}
      </div>
    </div>
  )
}

export default Products