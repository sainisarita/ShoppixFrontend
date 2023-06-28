import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import ring1 from '../../../../images/ring1.jpg';
import ring2 from '../../../../images/ring2.jpg';
import ring3 from '../../../../images/ring3.jpg';
import ring4 from '../../../../images/ring4.jpg';
import './Ring.css';

const Ring = () => {
  return (
    <div className="ring-container">
      <CardGroup>
        <Card className='trendRing'>
          <Card.Img variant="top" src={ring1} alt="My Photo" />
          <Card.Body>
            <Card.Title>Bridal wedding rings set</Card.Title>
            <Card.Text>$4,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">Sale!</Button>
          </Card.Body>
        </Card>
        <Card className='trendRing'>
          <Card.Img variant="top" src={ring2} alt="My Photo" />
          <Card.Body>
            <Card.Title>Wedding rings set</Card.Title>
            <Card.Text>$4,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">Sale!</Button>
          </Card.Body>
        </Card>
        <Card className='trendRing'>
          <Card.Img variant="top" src={ring3} alt="My Photo" />
          <Card.Body>
            <Card.Title>Blue topaz gemstone rings</Card.Title>
            <Card.Text>$1,890.90</Card.Text>
            <Button variant="primary" href="your-link-here">Sale!</Button>
          </Card.Body>
        </Card>
        <Card className='trendRing'>
          <Card.Img variant="top" src={ring4} alt="My Photo" />
          <Card.Body>
            <Card.Title>Blue topaz gemstone rings</Card.Title>
            <Card.Text>$1,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">Sale!</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Ring;
