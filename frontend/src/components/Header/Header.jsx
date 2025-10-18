import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Array of 5 images for the slideshow
  const slides = [
    assets.banner13,
    assets.banner15,
    assets.banner14,
    assets.banner11,
    assets.banner
  ]

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className='header'>
      <div className='slideshow-container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      
      <div className='header-contents'>
        <h2>
          ভর্তি ও চাকরি প্রস্তুতি <br /> শুরু হোক
          <br /> জয়কলি'র সাথেই
        </h2>
        <p>
          মূল বইয়ের পাশাপাশি বুয়েট পদার্থ/পদার্থ বিচিত্রা, বুয়েট রসায়ন /
          রসায়ন বিচিত্রা, বুয়েট গণিত/গণিত বিচিত্রা, বায়োলজি বিচিত্রা এবং
          প্রশ্নব্যাংক বইগুলো ভালোভাবে অনুশীলন করলে ভর্তি পরীক্ষায় ভালো ফলাফল
          অর্জন করা সম্ভব। |{' '}
        </p>
        <Link to='/shop'>
          <button>Buy Now</button>
        </Link>
      </div>

      {/* Navigation dots */}
      <div className='slideshow-dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Header