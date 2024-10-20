import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import './index.css'

function Header() {
  return (
    <header>
      <div className='shipping-para'>
        <p>Free Shipping on orders above 999/-</p>
        <p>Call us on: +91 9876805120</p>
      </div>
      <nav className='navbar'>
        <img src="https://res.cloudinary.com/drmbcia6x/image/upload/v1729329036/dqj9t0mz17txfcobkpqg.png" alt="logo" className='logo'/>
        <ul className='nav-list-container'>
            <li>Home</li>
            <li className='plants-pots'>Plants & Pots</li>
            <li>
                <select name="tools" id="tools-dropdown">
                
                    <option value="default" disabled selected>Tools</option>
                    <option value="garden-trowel">Garden Trowel</option>
                    <option value="pruning-shears">Pruning Shears</option>
                    <option value="watering-can">Watering Can</option>
                </select>
            </li>
            <li>
                <select name="services" id="services-dropdown">
                    <option value="default" disabled selected>Services</option>
                    <option value="plant-care">Plant Care</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="garden-design">Garden Design</option>
                </select>
            </li>
            <li>Blog</li>
            <li>Our Story</li>
            <li>FAQs</li>
        </ul>
        <div className='profile-cart-container'>
            <div>
                <CgProfile className='prof-cart'/>
                <p>My Profile</p>
            </div>
            <div className='cart-container'>
                <BsCart3 className='prof-cart'/>
                <p>Cart</p>
                <span className="cart-count-badge">1</span>
            </div>
        </div>
      </nav>
      <div className="search-bar-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input type="text" className="search-input" placeholder="Search..." />
        <img 
        src="https://res.cloudinary.com/drmbcia6x/image/upload/v1729422608/image_91_iqjblh.png" 
        alt="logo" 
        className="logo-image" 
      />
      </div>
      
    </div>
    </header>
  )
}

export default Header
