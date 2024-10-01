import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext'; // Make sure this path is correct

const CartItems = (props) => {
  // Destructure the context data
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitem'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Loop through products and display only those present in the cart */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} >
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)} 
                  alt="Remove item"
                  className="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; 
      })}
    
    </div>
  );
};

export default CartItems;
