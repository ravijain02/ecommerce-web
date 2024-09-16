import { useState, useEffect } from 'react'
import './App.css'
import Layout from './Components/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Address from './pages/address'
import Payment from './pages/payment'
import OrderTrack from './pages/orderTrack'

function App() {

  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem('cartCount')
    return savedCartCount ? parseInt(savedCartCount, 10) : 0
  })

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount)
  }, [cartCount])

  const updateCartCount = (count) => {
    setCartCount(count)
  }

  return (
    <BrowserRouter>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route path='/' element={<Home  updateCartCount={updateCartCount} />} />
          <Route path='/cart' element={<Cart updateCartCount={updateCartCount} />} />
          <Route path='/address' element={<Address updateCartCount={updateCartCount} />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/order-status' element={<OrderTrack />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
