import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { FaStar } from 'react-icons/fa';
import { IoIosHeartEmpty } from "react-icons/io";
import CartContext from '../../context/CartContext';
import './index.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.imgUrl} alt={product.name} className="product-image" />
        <IoIosHeartEmpty className="wishlist-icon" />
      </div>
      
      <Popup
      modal
      trigger={
        <button className="view-product-btn">View Product</button>
      }
    >
      {close => (
        <div className='thankyou-container'>
          <div>
            <p>Your Cart</p>
            <hr/>
            <div>
              <h1>Congratulations <br/> Order Placed</h1>
              <img src="https://res.cloudinary.com/drmbcia6x/image/upload/v1729433636/plant_1_tmak42.png" alt="plant"/>
              <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
            </div>
          </div>
          <button
            type="button"
            className="trigger-button view-product-btn"
            onClick={() => close()}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </Popup>
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">₹{product.price}</p>
        <div className="rating">
          {Array(5).fill().map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      </div>
      <div className="cart-actions">
        <div className="cart-quantity">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <div className='buttons'>
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
        <button className="rent-btn">Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
