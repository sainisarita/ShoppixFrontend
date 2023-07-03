import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TrendingRing.css';
import ring1 from '../../images/TrendingRingImage/dangal-pave-bridal-ring.jpg';
import ring2 from '../../images/TrendingRingImage/diamond-bridal-ring.jpg';
import ring3 from '../../images/TrendingRingImage/muticolour-gemstone-ring.jpg';
import ring4 from '../../images/TrendingRingImage/wedding-ring-set.jpg';
import Zoom from 'react-reveal/Flip';


const TrendingRing = () => {
  return (
    <div className="trending-ring-container">
      <div className="custom-card">
        <Zoom center>
        <Card className="trend-ring">
          <Card.Img variant="top" src={ring4} alt="My Photo" />
          <Card.Body>
            <Card.Title>Bridal wedding rings set</Card.Title>
            <Card.Text>$4,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">
              Sale!
            </Button>
          </Card.Body>
        </Card>
        <Card className="trend-ring">
          <Card.Img variant="top" src={ring3} alt="My Photo" />
          <Card.Body>
            <Card.Title>Multi Color Gemstone Ring</Card.Title>
            <Card.Text>$4,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">
              Sale!
            </Button>
          </Card.Body>
        </Card>
        <Card className="trend-ring">
          <Card.Img variant="top" src={ring2} alt="My Photo" />
          <Card.Body>
            <Card.Title>Diamond Bridal Ring</Card.Title>
            <Card.Text>$1,890.90</Card.Text>
            <Button variant="primary" href="your-link-here">
              Sale!
            </Button>
          </Card.Body>
        </Card>
        <Card className="trend-ring">
          <Card.Img variant="top" src={ring1} alt="My Photo" />
          <Card.Body>
            <Card.Title>Dangal Pave Bridal Ring</Card.Title>
            <Card.Text>$1,090.90</Card.Text>
            <Button variant="primary" href="your-link-here">
              Sale!
            </Button>
          </Card.Body>
        </Card>

        </Zoom>
              </div>
    </div>
  );
};

export default TrendingRing;
