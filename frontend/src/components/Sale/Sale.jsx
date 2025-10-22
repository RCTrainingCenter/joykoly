import React from 'react'
import { Link } from 'react-router-dom'
import './Sale.css'
import saleImgOne from '../../assets/saleImgOne.gif'
import saleImgTwo from '../../assets/saleImgTwo.jpg'
import saleImgThree from '../../assets/saleImgThree.jpg'

const Sale = () => {
  return (
    <div className='sale-container'>
      <div className='sale-main-card sale-card-glow'>
        <img
          src={saleImgOne}
          alt='saleImgOne'
        />
        <div className='sale-overlay'>
          <div className='sale-content'>
            <p className='sale-title'>
              বইয়ের উপর বিশেষ ছাড়
            </p>
            <p className='sale-subtitle'>
              সীমিত সময়ের অফার
            </p>
            <Link to='/shop'>
              <button className='sale-button'>এখনই কিনুন</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className='sale-side-container'>
        <div className='sale-side-card sale-card-glow'>
          <img
            src={saleImgTwo}
            alt='saleImgTwo'
          />
          <div className='sale-overlay'>
            <div className='sale-content'>
              <p className='sale-title'>
                নতুন বইয়ের উপর ছাড়
              </p>
              <p className='sale-subtitle'>
                বিশেষ অফার
              </p>
              <Link to='/shop'>
                <button className='sale-button'>কিনুন</button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className='sale-side-card sale-card-glow'>
          <img
            src={saleImgThree}
            alt='saleImgThree'
          />
          <div className='sale-overlay'>
            <div className='sale-content'>
              <p className='sale-title'>
                জনপ্রিয় বইয়ের ছাড়
              </p>
              <p className='sale-subtitle'>
                সেরা দাম
              </p>
              <Link to='/shop'>
                <button className='sale-button'>কিনুন</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale
