import React from 'react';
import './Card.css';
import ring from '../../images/ring.jpg';
import Fade from 'react-reveal/Fade';
import Services from './components/Services/Services';
import NewArrivals from './components/NewArrival/NewArrival';
import Ring from './components/Ring/Ring';

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={ring} alt="ring" />
      </div>
      <div className="card-content">
        <Fade bottom><h2>IN STORES & ONLINE NOW</h2></Fade>
        <span className="forever">Forever</span>
        <span className="yours">Yours</span>
        <h1>30% OFF - on your first purchase!</h1>
      </div>
      
      <Services/>
      <NewArrivals/>
      <Ring/>
    </div>
  );
};

export default Card;
