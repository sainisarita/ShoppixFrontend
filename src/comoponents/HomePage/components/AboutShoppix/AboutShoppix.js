import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import './AboutShoppix.css';
import image1 from '../../images/BestChoiceImage/diamond-solitaire-engagement-wedding-ring-round-br-XZSLG95.jpg';
import image2 from  '../../images/BestChoiceImage/pink-diamond-bridal-wedding-engagement-ring-FB6JR2C.jpg';
import image3 from '../../images/BestChoiceImage/pink-diamond-stud-earrings-pair-PU467FZ.jpg';
import image4 from '../../images/BestChoiceImage/wedding-rings-set-P5HGT4W.jpg';
import image5 from '../../images/BestChoiceImage/yellow-diamond-citrine-topaz-stud-earrings-pair-KAV4QY2.jpg';

const AboutShoppix = () => {
  return (
    <Container className="about-shoppix">
      <Row>
        <Col>
          <div className="shoppix">
            <h1>Shoppix</h1>
            <p>Sed sed risus pretium quam vulputate dignissim suspendisse in est. Semper eget duis at tellus.</p>
          </div>
        </Col>
        <Col className="text-center">
          <div className="products">
            <h1>Products</h1>
            <a href="/product1">First Link </a><br />
            <a href="/product2">Second Link</a><br />
            <a href="/product3">Third Link</a><br />
            <a href="/product4">Fourth Link</a><br />
            <a href="/product5">Fifth Link</a><br />
            <a href="/product6">Sixth Link</a><br />
            <a href="/product7">Seventh Link</a><br />
            <a href="/product8">Eighth Link</a><br />
            {/* Add more product links as needed */}
          </div>
        </Col>
        <Col>
          <div className="company">
            <h1>Company</h1>
            <a href="/company1">First Link </a><br />
            <a href="/company2">Second Link</a><br />
            <a href="/company3">Third Link</a><br />
            <a href="/company4">Fourth Link</a><br />
          </div>
        </Col>
        <Col>
          <div className="contact-us">
            <h1>Contact Us</h1>
            <p>1408 Blocks Valley, Sydney, NSW 2060, Australia (+61) 555-1408 info@shoppix.com</p>
          </div>
        </Col>
        <Col>
        <div className="best-choices">
            <h1 className="single-line-heading">Our Best Choices</h1>
            <a href="/image1">
              <Image src={image1} alt="Best Choice 1" className='best-image' />
            </a>
            <a href="/image2">
              <Image src={image2} alt="Best Choice 2" className='best-image' />
            </a>
            <a href="/image3">
              <Image src={image3} alt="Best Choice 3" className='best-image' />
            </a>
            <a href="/image4">
              <Image src={image4} alt="Best Choice 4" className='best-image' />
            </a>
            <a href="/image5">
              <Image src={image5} alt="Best Choice 5 " className='best-image' />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutShoppix;
