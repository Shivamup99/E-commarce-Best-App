import React, { useReducer,useEffect } from 'react'
import Topbar from '../component/bar/Topbar'
import Navbar from '../component/bar/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './style/single.scss'
import ProductScreen from '../component/single/ProductScreen'
import { getError } from '../utils/error'
import MessageBox from '../utils/MessageBox'


const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state,loading:true}
    case 'FETCH_SUCCESS':
      return {...state,product:action.payload,loading:false}
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload}
    default:
      return state
  }
}


const SingleProduct = () => {
const slug = useParams() 
console.log(slug.id)
const [{loading,error,product},dispatch] = useReducer(reducer,{
    loading:true,
    error:'',
    product:''
  })

  useEffect(()=>{
    const fetchProduct =async()=>{
      dispatch({type:'FETCH_REQUEST'})
      try {
        let response = await axios.get(`http://localhost:5000/api/product/${slug.id}`)
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
        console.log(response.data)
      } catch (error) {
        dispatch({type:'FETCH_FAIL',payload:getError(error)})
      }
    }
    fetchProduct()
  },[slug])

  return (
    <div className='single'>
    <div className="home-item">
      <Topbar/>
      <div className='bar'>
      <Navbar/>
      </div>
      </div>
      <div className="single-row">
      {loading ? (<h1>LOADING....</h1>):error?(<MessageBox>{error}</MessageBox>):(
        <ProductScreen product={product}/>
      )}
      </div>
    </div>
  )
}

export default SingleProduct