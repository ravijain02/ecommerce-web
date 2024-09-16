import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaCheck, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/cart.css'

const Cart = () => {

  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems')
    setCartItems(savedCartItems ? JSON.parse(savedCartItems) : {})
  }, [])

  const removeItem = (productId) => {
    const updatedCartItems = { ...cartItems }
    delete updatedCartItems[productId]
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const calculateTotal = () => {
    return Object.values(cartItems).reduce((acc, item) => {
      const itemPrice = item?.price?.replace(' RS', '')
      return acc + (itemPrice ? parseFloat(itemPrice) : 0)
    }, 0)
  }

  return (
    <div className="cart-container">
        <div className="payment-process">
            <div className="back-arrow">
                <Link to="/"><FaArrowLeft size={24} /></Link>
            </div>
            <div className="progress-circles">
                <div className='circle-container'>
                    <div className="circle">
                        <FaCheck />
                    </div>
                    <p className="circle-text">Cart</p>
                </div>
                <div className='circle-container'>
                    <div className="circle">
                    </div>
                    <p className="circle-text">Address</p>
                </div>
                <div className='circle-container'>
                    <div className="circle">
                    </div>
                    <p className="circle-text">Payment</p>
                </div>
                <div className='circle-container'>
                    <div className="circle">
                    </div>
                    <p className="circle-text">Confirm</p>
                </div>
            </div>
            <div className="secure-icon">
                <FaShieldAlt  size={24} /> 100% Secure
            </div>
        </div>
        <h2>Shopping Cart</h2>
        {Object.keys(cartItems).length > 0 ? (
            <div className="cart-items">
            {Object.values(cartItems).map(item => (
                <div key={item.id} className="cart-item">
                <img src={item.image} alt={`Product ${item.id}`} className="cart-item-image" />
                <p>{item.price}</p>
                <button className="btn-remove" onClick={() => removeItem(item.id)}> Remove </button>
                </div>
            ))}
            </div>
        ) : (
            <p>Your cart is empty.</p>
        )}
        {Object.keys(cartItems).length > 0 && (
            <div className="cart-total">
            <h3>Total: {calculateTotal()} RS</h3>
            <Link to="/address"><button className="_btn">Proceed</button></Link>
            </div>
        )}
    </div>
  )
}

export default Cart
