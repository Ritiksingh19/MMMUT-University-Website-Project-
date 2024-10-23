import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Innovate today, Lead Tomorrow’s Future.</h2>
            <p>At our university, innovation thrives. We foster curiosity and knowledge, empowering students to shape 
                the future and achieve success through transformative education and collaborative experiences.</p>
            <p>Discover a vibrant environment where curiosity drives innovation. Our commitment to knowledge
                 equips students to navigate challenges, inspire change, and succeed in a dynamic future.</p>   
            <p>Emphasizing the power of curiosity and innovation, our university nurtures knowledge that drives success.
                 Weprepare students to embrace challenges, think critically, and lead with confidence in
                  shaping a brighter future.</p>     
        </div>
    </div>
  )
}

export default About