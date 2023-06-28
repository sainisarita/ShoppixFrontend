import React from 'react';
import { Card } from 'react-bootstrap';
import './Trending.css';

const Trending = () => {
  return (
    <div className='trending'>
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="section-title">
          <span className="highlight-color">Trending</span> <span className="normal-color">Now</span>
        </Card.Title>
        <a href="#" class="view-all-products">View all products</a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Trending;
