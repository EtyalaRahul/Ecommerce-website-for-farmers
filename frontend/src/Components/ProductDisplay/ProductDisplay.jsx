import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="product-display-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{123}</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">$ {product.old_price}</div>
            <div className="productdisplay-right-price-new">$ {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Planting seeds refers to the act of sowing seeds in soil to initiate the process of plant growth. It involves preparing the soil, placing the seeds at the right depth, and providing proper water and nutrients to foster germination and healthy development of the plants.
        </div>
        <div className="productdisplay-right-side">
            <h1>Select quantity</h1>
            <div className="productdisplay-right-size">
                <div>1kg </div>
                <div>2kg</div>
                <div>3kg</div>
                <div>5kg</div>
                <div>10kg</div>
            </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
        <p className='productdisplay-right-category'><span>Category:seeds ,fertilizers, irrigation products </span></p>
      </div>
    </div>
  )
}

export default ProductDisplay
