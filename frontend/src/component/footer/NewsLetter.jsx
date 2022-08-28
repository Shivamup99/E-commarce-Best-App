import React from 'react'
import './footer.scss'
const NewsLetter = () => {
  return (
    <div className='news'>
        <div className="news-row">
            <div className="news-col">
                <h2>News letter</h2>
                <p>get timely update for your favorite products</p>
                <div className="input-container">
                    <input type="text" placeholder='Your email'/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter