import React from 'react'
import './Footer.css'
import instagram_icon from "../Assets/instagram_icon.png"
import pintrest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="https://img.freepik.com/premium-photo/green-white-logo-plant-with-green-leaves_1103290-62797.jpg?size=626&ext=jpg&ga=GA1.1.1213044808.1727718120&semt=ais_hybrid" style={{ height: '90px', width: '110px', marginTop: '20px' }} alt="" />
        <p>Harvest Haven</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copy right @2024 all rights reserved : rahul,gayatri,darshini </p>
      </div>
    </div>
  )
}
export default Footer
