import React from 'react';
import './Card.css';
import Ring from '../../images/ring.webp';
import bag from '../../images/bag.jpg';

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={Ring} alt="ring" />
      </div>
      <div className="card-content">
        <h2>IN STORES & ONLINE NOW</h2>
        <span className="forever">Forever</span>
        <span className="yours">Yours</span>
        <h1>30% OFF - on your first purchase!</h1>
      </div>
      <div className="card-list">
        <a href="#" className="child-card">
          <div className="card-image">
            <img src={bag} alt="My Photo" />
          </div>
          <div className="card-content">
            <h2>Free Shipping</h2>
            <p>Free shipping returns within 14 days for all sales.</p>
          </div>
        </a>
        <a href="#" className="child-card">
          <div className="card-image">
            <img src={bag} alt="My Photo" />
          </div>
          <div className="card-content">
            <h2>Free Shipping</h2>
            <p>Free shipping returns within 14 days for all sales.</p>
          </div>
        </a>
        <a href="#" className="child-card">
          <div className="card-image">
            <img src={bag} alt="My Photo" />
          </div>
          <div className="card-content">
            <h2>Free Shipping</h2>
            <p>Free shipping returns within 14 days for all sales.</p>
          </div>
        </a>
      </div>
      
    </div>
  );
};

export default Card;
