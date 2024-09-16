import React, { useState } from 'react'
import { FaArrowLeft, FaCheck, FaShieldAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/payment.css'
import OrderSuccess from '../assets/order_success.png'

const Payment = () => {

    const navigate = useNavigate()

    const[orderConfirm,  setOrderConfirm] = useState(false)

    const orderHandler = () => {
        setOrderConfirm(true)
    }

    const orderStatus = () => {
        navigate('/order-status')
    }

  return (
    <div className="payment-container"> 
        <div className="payment-process">
            <div className="back-arrow">
                <Link to="/address"><FaArrowLeft size={24} /></Link>
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
                        <FaCheck />
                    </div>
                    <p className="circle-text">Address</p>
                </div>
                <div className='circle-container'>
                    <div className="circle">
                        <FaCheck />
                    </div>
                    <p className="circle-text">Payment</p>
                </div>
                <div className='circle-container'>
                    <div className="circle">
                       {orderConfirm && <FaCheck /> }
                    </div>
                    <p className="circle-text">Confirm</p>
                </div>
            </div>
            <div className="secure-icon">
                <FaShieldAlt  size={24} /> 100% Secure
            </div>
        </div>
        { !orderConfirm ? (
            <>
            <h2>Choose Payment Method</h2>
            <div className="payment-methods">
                <label>
                <input type="radio" name="payment" value="UPI" /> UPI (GooglePay, PhonePe, Paytm)
                </label>
                <label>
                <input type="radio" name="payment" value="Card" /> Credit/Debit Card
                </label>
                <label>
                <input type="radio" name="payment" value="COD" /> Cash on Delivery
                </label>
            </div>
            <button className="_btn" onClick={orderHandler}>Confirm Payment</button>
            </>
            ) : (
                <div className='order-success'>
                    <p>Thank you for shopping with us Your order will reach you on (date) at (time).</p>
                    <h3>Your order is confirmed <button className="_btn" onClick={orderStatus}>Track Order</button></h3>
                    <img src={OrderSuccess} alt='Order' />
                </div>
            )
        }
    </div>
  )
}

export default Payment
