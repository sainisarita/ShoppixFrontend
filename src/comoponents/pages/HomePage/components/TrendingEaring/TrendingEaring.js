import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import earring1 from '../../images/TrendingEaringImage/diamond-engagement-ring.jpg';
import earring2 from '../../images/TrendingEaringImage/gold-earing.jpg';
import earring3 from '../../images/TrendingEaringImage/diamond-bridal-earing.jpg';
import earring4 from '../../images/TrendingEaringImage/drop-square-earing.jpg';
import './TrendingEaring.css';

const TrendingEaring = () => {
  return (
    <div className="trending-earring-container">
      <Card className="parent-card">
        <Card.Body>
          <CardGroup className="custom-card">
            <Card className="trend-earring">
              <Card.Img variant="top" src={earring1} alt="Earring 1" />
              <Card.Body>
                <Card.Title>Diamond Stud Earrings</Card.Title>
                <Card.Text>$2,999.99</Card.Text>
                <Button variant="primary" href="your-link-here">
                  Sale!
                </Button>
              </Card.Body>
            </Card>
            <Card className="trend-earring">
              <Card.Img variant="top" src={earring2} alt="Earring 2" />
              <Card.Body>
                <Card.Title>Pearl Drop Earrings</Card.Title>
                <Card.Text>$1,499.99</Card.Text>
                <Button variant="primary" href="your-link-here">
                  Sale!
                </Button>
              </Card.Body>
            </Card>
            <Card className="trend-earring">
              <Card.Img variant="top" src={earring3} alt="Earring 3" />
              <Card.Body>
                <Card.Title>Hoop Earrings</Card.Title>
                <Card.Text>$799.99</Card.Text>
                <Button variant="primary" href="your-link-here">
                  Sale!
                </Button>
              </Card.Body>
            </Card>
            <Card className="trend-earring">
              <Card.Img variant="top" src={earring4} alt="Earring 4" />
              <Card.Body>
                <Card.Title>Diamond Dangle Earrings</Card.Title>
                <Card.Text>$3,499.99</Card.Text>
                <Button variant="primary" href="your-link-here">
                  Sale!
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrendingEaring;
