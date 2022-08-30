import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './category.scss'
import logger from 'use-reducer-logger'
import MessageBox from '../../utils/MessageBox'

const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state,loading:true}
    case 'FETCH_SUCCESS':
      return {...state,categories:action.payload,loading:false}
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload}
    default:
      return state
  }
}

const Category = () => {
  const [{loading,error,categories},dispatch] = useReducer(logger(reducer),{
    loading:true,
    error:'',
    categories:[]
  })

  useEffect(()=>{
    const fetchCategory =async()=>{
      dispatch({type:'FETCH_REQUEST'})
      try {
        let response = await axios.get('http://localhost:5000/api/category')
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
      } catch (error) {
        dispatch({type:'FETCH_FAIL',payload:error.message})
      }
    }
    fetchCategory();
  },[])
  return (
    <div className='category'>
        <div className="category-row">
          {loading ? (<h1>LOADING....</h1>): error?(<MessageBox>{error}</MessageBox>):(
            categories.map((item,i)=>(
              <div className="category-col" key={i}>
              <img src={item.img} alt="hd" />
              <div className="category-content">
                  <span>{item.title}</span>
                  <button className='cat-btn'>Shop now</button>
              </div>
          </div> 
          )))}
        </div>
    </div>
  )
}

export default Category