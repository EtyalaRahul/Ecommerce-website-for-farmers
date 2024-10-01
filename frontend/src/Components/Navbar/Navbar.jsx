import React, { useState } from 'react'
import './Navbar.css';
// import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu,SetMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="https://img.freepik.com/premium-photo/green-white-logo-plant-with-green-leaves_1103290-62797.jpg?size=626&ext=jpg&ga=GA1.1.1213044808.1727718120&semt=ais_hybrid" style={{width:"70px",height:"60px"}} alt="" />
        <p>Harvest Haven</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{SetMenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Home</Link>{menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{SetMenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Fertilizers</Link>{menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{SetMenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Seeds</Link>{menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>{SetMenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Irrigation products</Link>{menu==="kids"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
