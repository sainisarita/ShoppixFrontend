import React from 'react';
import Card from 'react-bootstrap/Card';
import './ExploreShoppix.css'
const ExploreShoppix = () => {
  return (
    <div className="explore-shoppix">
        <Card className="text-center">
      <Card.Body>
        <Card.Title>EXPLORE SHOPPIX</Card.Title>
        <Card.Text>
          Jewelry Collection
        </Card.Text>
        <span className='year'>2020/</span>
        <span className='date'> 04</span>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ExploreShoppix;
