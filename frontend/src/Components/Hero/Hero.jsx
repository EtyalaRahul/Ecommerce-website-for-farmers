import React from 'react'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import abc from '../Assets/abc.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Welcome</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Smart Farm</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>Starts here</p>
            <p></p>
        </div>
        <div className="hero-latest-btn">
            <div>oder now</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right" style={{ 
      width: '200px', 
      height:'400px',
      marginTop:'140px',
      marginLeft:'-130px'

    }} >
        <img src={abc} alt="" style={{borderRadius:'40%'}} />
      </div>
    </div>
  )
}

export default Hero
