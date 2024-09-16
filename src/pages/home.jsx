import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

import Img1 from '../assets/img.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import Img5 from  '../assets/Addyvero.jpg'

const products = [
  { id: 1, image: Img1, price: '499 RS' },
  { id: 2, image: Img2, price: '599 RS' },
  { id: 3, image: Img3, price: '599 RS' },
  { id: 4, image: Img4, price: '599 RS' },
  { id: 5, image: Img5, price: '1599 RS' },
];

const Home = ({ updateCartCount }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : {}
    })

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart))
        updateCartCount(Object.keys(cart).length)
    }, [cart, updateCartCount])

    const handleAddToCart = (product) => {
      setCart((prevCart) => {
          const newCart = { ...prevCart, [product.id]: product }
          return newCart
      })
    }

  return (
    <div className="product-page">
        <h3 className="heading">New Brand Fashion is Here</h3>
        <div className="product-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                  <img src={product.image} alt='Product pic' className="product-image" />
                  <p className="product-price">{product.price}</p>
                  <div className="product-buttons">
                    <button  className="btn add-to-cart" onClick={() => handleAddToCart(product)} >
                      {cart[product.id] ? 'Added' : 'Add to Cart'}
                    </button>
                    <Link to='/address'><button className="btn buy-now">Buy Now</button></Link>
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Home
