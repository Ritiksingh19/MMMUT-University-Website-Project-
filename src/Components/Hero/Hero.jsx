import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education for a better world</h1>
            <p>Welcome to MMMUT, where innovation meets inspiration. Explore dynamic programs, 
                vibrant campus life, and transformative experiences that empower you to shape your future. 
                Join us and ignite your potential today!</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero