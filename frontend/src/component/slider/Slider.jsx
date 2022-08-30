import React,{useEffect, useState,useReducer} from 'react'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material'
import './slider.scss'
import axios from 'axios'
import logger from 'use-reducer-logger'
import MessageBox from '../../utils/MessageBox'

const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state,loading:true}
    case 'FETCH_SUCCESS':
      return {...state,slides:action.payload,loading:false}
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload}
    default:
      return state
  }
}

const Slider = () => {
    const [{loading,error,slides},dispatch] = useReducer(logger(reducer),{
        loading:true,
        error:'',
        slides:[]
      })

    const [slideIndex,setSlideIndex] = useState(0)
    const slideLength = slides.length-1;
    const handleArrowClick =(direction)=>{
       if(direction==='left'){
        setSlideIndex(slideIndex >0 ? slideIndex-1:slideLength)
       } else{
        setSlideIndex(slideIndex < slideLength ? slideIndex+1:0)
       }
    }

    useEffect(()=>{
        const fetchSlide =async()=>{
            dispatch({type:'FETCH_REQUEST'})
            try {
              let response = await axios.get('http://localhost:5000/api/slider')
              dispatch({type:'FETCH_SUCCESS',payload:response.data})
            } catch (error) {
              dispatch({type:'FETCH_FAIL',payload:error.message})
            }
          }
        fetchSlide();
    },[])

  return (
    <div className='slider'>
        <div className="arrow-left" onClick={()=>handleArrowClick('left')}>
            <ArrowCircleLeftOutlined/>
        </div>
        <div className="wrapper" slideIndex={slideIndex} style={{transform:`translateX(${slideIndex * -100}vw)`}}>
            {loading ? (<h1>LOADING....</h1>):error?(<MessageBox>{error}</MessageBox>):(
                  slides.map((item,index)=>(
                    <div className="slide" key={index}>
                    <div className="img-container">
                        <img src={item.img} alt='jd'/>
                    </div>
                </div>
               ))
            )}
        </div>
        <div className='arrow-right' onClick={()=>handleArrowClick('right')}>
            <ArrowCircleRightOutlined/>
        </div>
    </div>
  )
}

export default Slider