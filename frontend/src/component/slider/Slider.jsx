import React,{useState} from 'react'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material'
import './slider.scss'
import { slideData } from '../../rawData/slideData'
const Slider = () => {
    const slideLength = slideData.length-1;
    const [slideIndex,setSlideIndex] = useState(0)
    const handleArrowClick =(direction)=>{
       if(direction==='left'){
        setSlideIndex(slideIndex >0 ? slideIndex-1:slideLength)
       } else{
        setSlideIndex(slideIndex < slideLength ? slideIndex+1:0)
       }
    }

  return (
    <div className='slider'>
        <div className="arrow-left" onClick={()=>handleArrowClick('left')}>
            <ArrowCircleLeftOutlined/>
        </div>
        <div className="wrapper" slideIndex={slideIndex} style={{transform:`translateX(${slideIndex * -100}vw)`}}>
            {slideData.map((item,index)=>(
                 <div className="slide" key={index}>
                 <div className="img-container">
                     <img src={item.img} alt='jd'/>
                 </div>
             </div>
            ))}
        </div>
        <div className='arrow-right' onClick={()=>handleArrowClick('right')}>
            <ArrowCircleRightOutlined/>
        </div>
    </div>
  )
}

export default Slider