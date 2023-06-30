import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SamanthaWilliam from '../../../../images/TestimonialImage/people1.jpg';
import image2 from '../../../../images/TestimonialImage/people2.jpg';
import './CustomerReview.css';
const CustomerReview = () => {
  return (
    <Container className="customer-review">
      <Row>
        <Col md={6}>
          <div className="review">
            <h1>The best kind of fashion comes with joy</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="review-content">
              <Image src={SamanthaWilliam} alt="Smiling Woman" className="review-image rounded-circle" />
              <div className="review-text">
                <h3>Samantha William</h3>
                <p>Valued Client</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="review">
            <h1>Discover the best way to express yourself</h1>
            <p className='para'>Sit amet justo donec enim. Quam nulla porttitor massa id neque aliquam. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Nibh tellus molestie nunc non blandit massa enim nec.</p>
            <div className="review-content">
              <Image src={image2} alt="Happy Businessman" className="review-image rounded-circle" />
              <div className="review-text">
                <h3>Jonathan Hope</h3>
                <p >Valued Client</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerReview;
