import React from 'react'
import { FaSearch, FaHeart, FaUser, FaArrowDown, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/header.css'
import Navbar from './Navbar'

const Header = ({cartCount}) => {

  const navigate = useNavigate()

  const goToCart = () => {
    navigate('/cart')
  }


  return (
    <>
    <header className="header-container">
      <div className="logo">
        <h3>V O U G U E I S H</h3>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="user-info">
        <div className="pincode">
          <p>Pincode 1100XX</p>
          <FaArrowDown className="arrow-icon" />
        </div>
        <FaHeart className="icon heart-icon" />
        <FaShoppingCart className="icon cart-icon" onClick={goToCart}/>
        <span className="cart-count">{cartCount}</span>
        <FaUser className="icon user-icon" />
      </div>
    </header>
    <Navbar/>
    </>
  )
}

export default Header
