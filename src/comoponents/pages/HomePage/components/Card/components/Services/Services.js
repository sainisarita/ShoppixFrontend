import React from 'react';
import { Card } from 'react-bootstrap';
import Bag from '../../../../images/bag.jpg';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <Card className="service-card">
        <a href="#" className="service-link">
          <div className="service-image">
            <Card.Img variant="top" src={Bag} alt="My Photo" className="service-img-top" />
          </div>
          <Card.Body>
            <Card.Title className="service-title">Free Shipping</Card.Title>
            <Card.Text className="service-text">
              Free shipping returns within 14 days for all sales.
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
      <Card className="service-card">
        <a href="#" className="service-link">
          <div className="service-image">
            <Card.Img variant="top" src={Bag} alt="My Photo" className="service-img-top" />
          </div>
          <Card.Body>
            <Card.Title className="service-title">Delivery</Card.Title>
            <Card.Text className="service-text">
              Easy returns within 30 days of purchase.
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
      <Card className="service-card">
        <a href="#" className="service-link">
          <div className="service-image">
            <Card.Img variant="top" src={Bag} alt="My Photo" className="service-img-top" />
          </div>
          <Card.Body>
            <Card.Title className="service-title">Personal Shopping</Card.Title>
            <Card.Text className="service-text">
              Contact us anytime for assistance.
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default Services;
