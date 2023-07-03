import React from 'react';
import { Card } from 'react-bootstrap';
import './Trending.css';

const Trending = () => {
  return (
    <div className='trending'>
        <div className="section-title">
          <span className="highlight-color">Trending</span> <span className="normal-color">Now</span>
        </div>
        <a href="#" class="view-all-products">View all products</a>
        <span className='break'>|</span>
    </div>
  );
}

export default Trending;
