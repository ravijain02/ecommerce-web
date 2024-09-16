import React from 'react';
import '../styles/orderTrack.css';

const OrderTrack = () => {
  return (
    <div className="order-confirmation-container">
      <h3><strong>Order ID:</strong> 3354654654526</h3>
      <div className="order-details">
        <p>Order Date: <strong>Feb 16, 2022</strong></p>
        <p>Estimated Delivery:<strong> May 16, 2022</strong></p>
        <p>Representative will confirm before arrival.</p>
      </div>

      <p className='line'></p>
      <div className="order-status">
        <div className="status-item">
          <p className="status-text">Order Confirmed</p>
          <div className="circle active"></div>
          <p className="status-date">Wed, 11th Jan</p>
        </div>

        <div className="status-item">
          <p className="status-text pending-color">Shipped</p>
          <div className="circle"></div>
          <p className="status-date">Wed, 12th Jan</p>
        </div>

        <div className="status-item">
          <p className="status-text pending-color">Out For Delivery</p>
          <div className="circle"></div>
          <p className="status-date">Thu, 13th Jan</p>
        </div>

        <div className="status-item">
          <p className="status-text pending-color">Delivered</p>
          <div className="circle"></div>
          <p className="status-date">Expected by Mon, 16th May</p>
        </div>
      </div>

      <div className="product-summary">
        <h3>Product Summary</h3>
        <div className="d-flex">
            <div className='d-flex'>
                <div className='box'></div>
                <div className='prod-details'>
                    <p><strong>Product 1</strong></p>
                    <p>Brand | Product Name</p>
                </div>
          </div>
          <div className='prod-price'>
            <p>₹2599.00</p>
            <p className='qty'>Qty:1</p>
          </div>
        </div>
        <div className="d-flex">
            <div className='d-flex'>
                <div className='box'></div>
                <div className='prod-details'>
                    <p><strong>Product 2</strong></p>
                    <p>Brand | Product Name</p>
                </div>
          </div>
          <div className='prod-price'>
            <p>₹2599.00</p>
            <p className='qty'>Qty:1</p>
          </div>
        </div>
        <div className="d-flex">
            <div className='d-flex'>
                <div className='box'></div>
                <div className='prod-details'>
                    <p><strong>Product 3</strong></p>
                    <p>Brand | Product Name</p>
                </div>
          </div>
          <div className='prod-price'>
            <p>₹2599.00</p>
            <p className='qty'>Qty:1</p>
          </div>
        </div>
      </div>

      <p className='line'></p>
      <div className='d-flex'>
        <div className="Payment-via">
            <h3>Payment Vai</h3>
            <img src='' alt='payment'/> &nbsp;<label>Google Pay</label>
        </div>
        <div className="delivery-address">
            <h3>Delivery Address</h3>
            <p>847 Jewess Bridge Apt. 174, London, UK</p>
            <p>Phone: 474-769-3919</p>
        </div>
      </div>

      <p className='line'></p>

      <div className='d-flex'>
        <div className="need-help">
            <h3>Need Help?</h3>
            <ul className="help-links">
                <li href="#order-issues">Order Issues</li>
                <li href="#delivery-info">Delivery Info</li>
                <li href="#returns">Returns</li>
            </ul>
        </div>
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className='d-flex'>
                <p>Convenience fee (per item)</p>
                <p>₹100</p>
            </div>
            <div className='d-flex'>
                <p>Total amount</p>
                <p>100 *2 = ₹200</p>
            </div>
            <p className='line'></p>
            <div className='d-flex'>
                <p>Total</p>
                <p><b>₹200</b></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrack;
