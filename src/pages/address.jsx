import React from 'react'
import { FaArrowLeft, FaCheck, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/address.css'

const Address = () => {

  return (
    <div className="address-container">
        <div className="payment-process">
            <div className="back-arrow">
                <Link to="/cart"><FaArrowLeft size={24} /></Link>
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
        <h2>Choose Address</h2>
        <p>A detailed address ensures our delivery partner can find your location Quickly.</p>
        <div className="address-cards-wrapper">
            <div className="address-card">
                <h3>Current Address</h3>
                <p>Name: John Doe</p>
                <p>House Number: 123</p>
                <p>Location Area: Downtown</p>
                <p>Pincode: 123456</p>
                <p>Phone: +91 9999888899</p>
                <div className="btn-container">
                    <button type="button" className="_btn">Edit</button>
                    <Link to='/payment'><button type="button" className="_btn">Proceed</button></Link>
                </div>
            </div>
            <div className="address-card new-address-card">
                <div className="add">+</div>
                <p>Add New Address</p>
            </div>
        </div>
    </div>
  )
}

export default Address
