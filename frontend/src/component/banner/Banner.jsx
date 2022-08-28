import React from 'react'
import './banner.scss'
import {Call, Check,LocalShipping, SyncAlt} from '@mui/icons-material';
const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-row">
            <div className="banner-col">
                <Check />
                <span>Quality Product</span>
            </div>
            <div className="banner-col">
                <LocalShipping/>
                <span>Free Shipping</span>
            </div>
            <div className="banner-col">
                <SyncAlt/>
                <span>14 Days Return</span>
            </div>
            <div className="banner-col">
                <Call/>
                <span>24/7 Support</span>
            </div>
        </div>
    </div>
  )
}

export default Banner